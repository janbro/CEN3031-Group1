import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BackendService {
    baseURI = 'http://parking-picker.herokuapp.com';
    mapboxConfigUrl = this.baseURI + '/api/garages/mapbox';
    permissionsConfigUrl = this.baseURI + '/api/decals/';
    garagesConfigUrl = this.baseURI + '/api/garages/';
    occupancyConfigUrl = this.baseURI + '/api/occupancy';

    constructor(private http: HttpClient) { }

    public getGaragesMapbox() {
        return this.http.get(this.mapboxConfigUrl);
    }

    public getFilteredGaragesMapbox(permissions) {
        return this.http.post(this.mapboxConfigUrl, { decals: permissions });
    }

    public getFilteredDecalPermissions(decals) {
        return this.http.post(this.permissionsConfigUrl, { decals: decals });
    }

    public getGarage(id) {
        return this.http.get(this.garagesConfigUrl + id);
    }

    public getAllGarages() {
        return this.http.get(this.garagesConfigUrl);
    }

    public getGarages(decals) {
        return this.http.post(this.garagesConfigUrl, { decals: decals });
    }

    public getOccupancies() {
        return this.http.get(this.occupancyConfigUrl);
    }

    public getOccupanciesByName(garageName) {
        return this.http.get(this.occupancyConfigUrl + '/' + garageName);
    }

    public addOccupancy(occupancy) {
        return this.http.post(this.occupancyConfigUrl, { occupancy: occupancy });
    }
}
