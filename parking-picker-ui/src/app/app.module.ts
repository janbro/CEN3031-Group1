import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from './core/material.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './services/backend.service';
import { MatDialogModule } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ParkDialogComponent } from './dialog/dialog.component';
import { MatRadioModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: MapComponent, data: { title: 'Map Component' } },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
    ParkDialogComponent
  ],
  entryComponents: [
    ParkDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2hlbHNlYWNhbmRlbG9yYSIsImEiOiJjam5ieWVpMDcwOTRxM3BvbDlqZGx4YXltIn0.v0C5haf-TS-noMhWkdTTYQ'
    }),
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [
    BackendService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
