import { Component, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import { MapMouseEvent } from 'mapbox-gl';
import { BackendService } from '../services/backend.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.css'],
  template: `
  <mgl-map
    [style]="'mapbox://styles/mapbox/streets-v9'"
    [zoom]="[13]"
    [center]="[-82.3549, 29.6436]"
    [cursorStyle]="cursorStyle"
  >
  <mgl-geojson-source
  id="points"
  [data]="points"
></mgl-geojson-source>
<mgl-layer
      id="points"
      source="points"
      type="symbol"
      [layout]="{
        'icon-image': 'circle-15',
        'icon-allow-overlap': true
      }"
      (click)="onClick($event)"
      (mouseEnter)="cursorStyle = 'pointer'"
      (mouseLeave)="cursorStyle = ''"
    ></mgl-layer>
        <mgl-popup
      *ngIf="selectedPoint"
      [lngLat]="selectedPoint.geometry.coordinates"
      (close)="selectedPoint = null"
    >
    <span [ngClass]="'bigtext'" [style.color] = "selectedPoint.properties.color" [innerHTML]="selectedPoint.properties.capacity"></span>
    <br>
    <span [innerHTML]="selectedPoint.properties.name"></span>
    </mgl-popup>
  </mgl-map>
  `
})

export class MapComponent implements OnChanges {
  selectedGarage: any;
  points: GeoJSON.FeatureCollection<GeoJSON.Point>;
  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null;
  cursorStyle: string;
  //     .subscribe((data: Backend) => this.backendService = {

  @Input() permissions;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    private backendService: BackendService) {
    this.showPoints();
  }

  showPoints() {
    this.backendService.getGaragesMapbox().subscribe((mapboxData: GeoJSON.FeatureCollection<GeoJSON.Point>) => {
      this.points = mapboxData;
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
