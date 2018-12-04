import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { MapMouseEvent } from 'mapbox-gl';
import { BackendService } from '../services/backend.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  template: `
  <mgl-map
    [style]="'mapbox://styles/chelseacandelora/cjp4ek7n13wq22ro23s7vf8fg'"
    [zoom]="[13.6]"
    [center]="[-82.3489, 29.6400]"
    [cursorStyle]="cursorStyle"
  >
  <mgl-control
      mglNavigation
    ></mgl-control>
  <mgl-geojson-source
  id="points"
  [data]="points"
></mgl-geojson-source>
<mgl-layer
      id="points"
      source="points"
      type="symbol"
      [layout]="{
        'icon-image': 'marker-carsnew',
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

export class MapComponent  {
  points: GeoJSON.FeatureCollection<GeoJSON.Point>;
  // showBackEndService() {
  //   this.backendService.getGaragesMapbox()
  //     .subscribe((data: Backend) => this.backendService = {
  //       mapboxConfigUrl: data['mapboxConfigUrl']
  //     });
  // }

@Input() permissions;

  showPoints() {
    this.backendService.getGaragesMapbox().subscribe((mapboxData:GeoJSON.FeatureCollection<GeoJSON.Point>) => {
      this.points = mapboxData;
    });
  }

  ngOnChanges(changes) {
    if(changes.permissions) {
      if(changes.permissions.currentValue.length > 0) {
        this.backendService.getFilteredGaragesMapbox(this.permissions).subscribe((mapboxData:GeoJSON.FeatureCollection<GeoJSON.Point>) => {
          this.points = mapboxData;
        });
      }else {
        this.showPoints();
      }
    }
  }

  // points: GeoJSON.FeatureCollection<GeoJSON.Point>;
  selectedPoint: GeoJSON.Feature<GeoJSON.Point> | null;
  cursorStyle: string;
  constructor(private ChangeDetectorRef: ChangeDetectorRef, private http: HttpClient, private backendService: BackendService ) {
    this.showPoints();

  // this.points = backendService.getGaragesMapbox();
  // console.log(backendService.getGaragesMapbox());
  // points: GeoJSON.FeatureCollection<GeoJSON.Point>;
  //   this.points = {
  //           'type': 'FeatureCollection',
  //           'features': [{
  //             'type': 'Feature',
  //             'geometry': {
  //               'type': 'Point',
  //               'coordinates': [-82.3512, 29.6419]
  //             },
  //             'properties': {
  //               'name': "Gale Lemerand Garage",
  //             }
  //           }, {
  //             'type': 'Feature',
  //             'geometry': {
  //               'type': 'Point',
  //               'coordinates': [-82.3429, 29.6453]
  //             },
  //             'properties': {
  //               'name':'Reitz Union Parking',
  //             },
  //           }, {
  //             'type': 'Feature',
  //             'geometry': {
  //               'type': 'Point',
  //               'coordinates': [-82.3375, 29.6455]
  //             },
  //             'properties': {
  //               'name': 'Newell Garage',
  //             }
  //           }, {
  //             'type': 'Feature',
  //             'geometry': {
  //               'type': 'Point',
  //               'coordinates': [-82.3473, 29.6510]
  //             },
  //             'properties': {
  //               'name':'Murphree Parking',
  //             }
  //           },
  //           {
  //             'type':'Feature',
  //             'geometry' : {
  //               'type':'Point',
  //               'coordinates':[-82.355441, 29.644732]
  //           },
  //           'properties': {
  //             'name':'Hume West'
  //           }
  //          }
  //         ]
  //         };
   }

   onClick(evt: MapMouseEvent) {
    this.selectedPoint = null;
    this.ChangeDetectorRef.detectChanges();
    this.selectedPoint = (<any>evt).features[0];
  }
}
