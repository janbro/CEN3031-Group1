import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MapComponent } from './map/map.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MatSelectModule } from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: MapComponent, data: { title: 'Map Component' } },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2hlbHNlYWNhbmRlbG9yYSIsImEiOiJjam5ieWVpMDcwOTRxM3BvbDlqZGx4YXltIn0.v0C5haf-TS-noMhWkdTTYQ'
    }),
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
