import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class BackendService {
    baseURI = 'https://parking-picker.herokuapp.com';
    mapboxConfigUrl = this.baseURI + '/api/garages/mapbox';
    permissionsConfigUrl = this.baseURI + '/api/decals/';
    garagesConfigUrl = this.baseURI + '/api/garages/';
    occupancyConfigUrl = this.baseURI + '/api/occupancy';

    constructor(private http: HttpClient) { }

    // Gets all geojson garage data
    public getGaragesMapbox() {
        return this.http.get(this.mapboxConfigUrl);
    }

    // Gets geojson garage data based on passed decal types
    public getFilteredGaragesMapbox(permissions) {
        return this.http.post(this.mapboxConfigUrl, { decals: permissions });
    }

    // Gets decal permission of passed decals
    public getFilteredDecalPermissions(decals) {
        return this.http.post(this.permissionsConfigUrl, { decals: decals });
    }

    // Gets garage data based on id
    public getGarage(id) {
        return this.http.get(this.garagesConfigUrl + id);
    }

    // Gets all garage data
    public getAllGarages() {
        return this.http.get(this.garagesConfigUrl);
    }

    // Get garages based on passed decal types
    public getGarages(decals) {
        return this.http.post(this.garagesConfigUrl, { decals: decals });
    }

    // Get all occupancy data
    public getOccupancies() {
        return this.http.get(this.occupancyConfigUrl);
    }

    // Get occupancy of garage by name
    public getOccupanciesByName(garageName) {
        return this.http.get(this.occupancyConfigUrl + '/' + garageName);
    }

    // Posts request to increment occupancy of decal spaces in garage specified
    public addOccupancy(occupancy) {
        return this.http.post(this.occupancyConfigUrl, { occupancy: occupancy });
    }
}
