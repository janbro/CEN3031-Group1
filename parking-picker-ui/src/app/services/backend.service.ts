import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BackendService {
    mapboxConfigUrl = 'http://parking-picker.herokuapp.com/api/garages/mapbox';
    permissionsConfigUrl = 'http://parking-picker.herokuapp.com/api/decals/';
  
    constructor(private http: HttpClient) { }

    public getGaragesMapbox() {
        return this.http.get(this.mapboxConfigUrl);
    }
    
    public getFilteredGaragesMapbox(permissions) {
        return this.http.post(this.mapboxConfigUrl, {decals:permissions});
    }
  
    public getFilteredDecalPermissions(decals) {
        return this.http.post(this.permissionsConfigUrl, {decals: decals});
    }

    public getAllGarages() {
        return '';
    }

    public getGarages(decals) {
        return decals;
    }
}
