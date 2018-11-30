import { Component, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
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
  selectedGarage: any;
  points: GeoJSON.FeatureCollection<GeoJSON.Point>;
  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null;
  cursorStyle: string;
  parkDialogRef: MatDialogRef<ParkDialogComponent>;

  @Input() permissions;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    private backendService: BackendService,
    private dialog: MatDialog) {
    this.showPoints();
  }

  showPoints() {
    this.backendService.getGaragesMapbox().subscribe((mapboxData: GeoJSON.FeatureCollection<GeoJSON.Point>) => {
      this.points = mapboxData;
    });
  }

  openAddFileDialog() {
    this.parkDialogRef = this.dialog.open(ParkDialogComponent, {
      data: {
        garageDecals: this.selectedGarage,
        permissions: this.permissions
      }
    });
  }

  ngOnChanges(changes) {
    if (changes.permissions) {
      if (changes.permissions.currentValue.length > 0) {
        this.backendService.getFilteredGaragesMapbox(this.permissions).subscribe((mapboxData: GeoJSON.FeatureCollection<GeoJSON.Point>) => {
          this.points = mapboxData;
        });
      } else {
        this.showPoints();
      }
    }
  }

  onClick(evt: MapMouseEvent) {
    this.selectedPoint = null;
    this.changeDetectorRef.detectChanges();
    this.selectedPoint = (<any>evt).features[0];
    this.backendService.getGarage(this.selectedPoint.properties.id).subscribe((garage: any) => {
      this.selectedGarage = garage;
    });
  }
}
