import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  decals = new FormControl();
  permissions = [];
  garage = {};
  decalList: Object[] = [{name: 'Green', value: 'green' },
                        { name: 'Park & Ride', value: 'parkNRide' },
                        { name: 'Red 1', value: 'red1' },
                        { name: 'Red 3', value: 'red3' },
                        { name: 'Brown', value: 'brown' },
                        { name: 'Disabled', value: 'handicap' },
                        { name: 'Motorcycle/Scooter', value: 'scooter' }];
  decalList1: Object[] = [{name: 'Gold', value: 'gold' },
                        { name: 'Silver', value: 'silver' },
                        { name: 'Official Business', value: 'business' },
                        { name: 'Orange', value: 'orange' },
                        { name: 'Blue', value: 'blue' },
                        { name: 'Medical Resident', value: 'medRes' },
                        { name: 'Staff Commuter', value: 'staffComm' },
                        { name: 'Disabled', value: 'handicap' },
                        { name: 'Carpool', value: 'carpool' },
                        { name: 'Motorcycle/Scooter', value: 'scooter' }];
  lut = [{name: 'Green', value: 'green' },
        { name: 'Park & Ride', value: 'parkNRide' },
        { name: 'Red 1', value: 'red1' },
        { name: 'Red 3', value: 'red3' },
        { name: 'Brown', value: 'brown' },
        { name: 'Disabled', value: 'handicap' },
        { name: 'Motorcycle/Scooter', value: 'scooter' },
        { name: 'Gold', value: 'gold' },
        { name: 'Silver', value: 'silver' },
        { name: 'Official Business', value: 'business' },
        { name: 'Orange', value: 'orange' },
        { name: 'Blue', value: 'blue' },
        { name: 'Medical Resident', value: 'medRes' },
        { name: 'Staff Commuter', value: 'staffComm' },
        { name: 'Disabled', value: 'disabled' },
        { name: 'Carpool', value: 'carpool' },
        { name: 'Motorcycle/Scooter', value: 'scooter' },
        { name: 'Orange/Blue', value: 'orangeBlue' },
        { name: 'Any', value: 'any' },
        { name: 'Gated', value: 'gated' },
        { name: 'Any (not PNR)', value: 'anyNotPNR' },
        { name: 'Brown/Green', value: 'brownGreen' },
        { name: 'Orange/Blue/Medical/Business', value: 'OMBO' }];
  occupancies = [];

  constructor(private backendService: BackendService) { }

  // Called when user clicks an input, update decal permissions
  updateSettings() {
    this.backendService.getFilteredDecalPermissions(this.decals.value).subscribe((permissions: any) => {
      this.permissions = permissions;
    });
  }

  // Called to retrieve occupancy information of selected garage
  updateGarageInfo(garage) {
    this.garage = garage;
    garage.decals.forEach(decal => {
      this.backendService.getOccupanciesByName(garage.name).subscribe((res: any) => {
        this.occupancies = res.data;
      });
    });
  }

  // Retrieves the human readable decal name
  getDecalName(decalName) {
    const name = this.lut.find((ele) => {
      return ele['value'] === decalName;
    });
    return name ? name.name : decalName;
  }

  // Retrieves the occupancy represented in percentage
  getOccupancy(decalName) {
    const occupancy = this.occupancies.find((ele) => {
      return ele.decal === decalName;
    });
    const total = this.garage['decals'].find((ele) => ele.name === decalName).specCapacity;
    if (!occupancy) { return 0; }
    return Math.ceil(occupancy.currOccupancy / total * 100);
  }

  // Retrieves the color for occupancy percentage
  getColor(capacity) {
    if (capacity < 60) {
      // Green
      return '#48af48';
    } else if (capacity < 85) {
      // Yellow
      return '#fde627';
    } else {
      // Red
      return '#a53a3a';
    }
  }

  ngOnInit() {
  }

}
