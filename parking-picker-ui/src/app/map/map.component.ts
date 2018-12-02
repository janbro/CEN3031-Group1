import { Component, ChangeDetectorRef, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { MapMouseEvent } from 'mapbox-gl';
import { BackendService } from '../services/backend.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ParkDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html'
})

export class MapComponent implements OnChanges {
  closed = true;
  selectedGarage: any;
  points: GeoJSON.FeatureCollection<GeoJSON.Point>;
  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null;
  cursorStyle: string;
  parkDialogRef: MatDialogRef<ParkDialogComponent>;

  @Input() permissions;
  @Output() garageSelected = new EventEmitter<boolean>();

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    private backendService: BackendService,
    private dialog: MatDialog) {
    this.showPoints();
  }

  // Load in garage points
  showPoints() {
    this.backendService.getGaragesMapbox().subscribe((mapboxData: GeoJSON.FeatureCollection<GeoJSON.Point>) => {
      this.points = mapboxData;
    });
  }

  // Called to open park dialog
  openAddFileDialog() {
    // Make sure not to open more than one dialog at a time
    if (this.closed) {
      this.closed = false;
      this.parkDialogRef = this.dialog.open(ParkDialogComponent, {
        data: {
          garageDecals: this.selectedGarage,
          permissions: this.permissions
        }
      });
      this.parkDialogRef.afterClosed().subscribe((event) => {
        // Reset reentrancy var
        this.closed = true;
      });
    }
  }

  // On user settings change update garage points on map
  ngOnChanges(changes) {
    if (changes.permissions) {
      // If the user has decals selected
      if (changes.permissions.currentValue.length > 0) {
        this.backendService.getFilteredGaragesMapbox(this.permissions).subscribe((mapboxData: GeoJSON.FeatureCollection<GeoJSON.Point>) => {
          this.points = mapboxData;
        });
      } else {
        this.showPoints();
      }
    }
  }

  // Set the selected garage when user clicks point
  onClick(evt: MapMouseEvent) {
    this.selectedPoint = null;
    this.changeDetectorRef.detectChanges();
    this.selectedPoint = (<any>evt).features[0];
    // Get garage data from backend
    this.backendService.getGarage(this.selectedPoint.properties.id).subscribe((garage: any) => {
      this.selectedGarage = garage;
      this.garageSelected.emit(this.selectedGarage);
    });
  }
}
