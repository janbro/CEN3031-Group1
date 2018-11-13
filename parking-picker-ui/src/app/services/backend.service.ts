import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BackendService {
mapboxConfigUrl = 'http://parking-picker.herokuapp.com/api/garages/mapbox';
  constructor(private http: HttpClient) { }

  public getGaragesMapbox() {
    return this.http.get(this.mapboxConfigUrl);
}

  public getAllGarages() {
      return '';
  }

  public getGarages(decals) {
      return decals;
  }
}
