import { Component, OnInit, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { MatSnackBar } from '@angular/material';

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
                        { name: 'Disabled', value: 'handicap' }];
  decalList1: Object[] = [{name: 'Gold', value: 'gold' },
                        { name: 'Silver', value: 'silver' },
                        { name: 'Official Business', value: 'business' },
                        { name: 'Orange', value: 'orange' },
                        { name: 'Blue', value: 'blue' },
                        { name: 'Medical Resident', value: 'medRes' },
                        { name: 'Staff Commuter', value: 'staffComm' },
                        { name: 'Disabled', value: 'handicap' },
                        { name: 'Carpool', value: 'carpool' }];
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
        { name: 'Orange/Blue/Medical/Business', value: 'OBMO' },
        { name: 'Red/Green', value: 'redGreen' }];
  occupancies = [];

  constructor(private backendService: BackendService, public snackBar: MatSnackBar) { }

  parked = false;

  // Called when user clicks an input, update decal permissions
  updateSettings() {
    this.backendService.getFilteredDecalPermissions(this.decals.value).subscribe((permissions: any) => {
      this.permissions = permissions;
    });
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('UserSettings', JSON.stringify(this.decals.value));
    }
    this.updateGarageInfo();
  }

  // Called to retrieve occupancy information of selected garage
  updateGarageInfo(garage?) {
    if (garage) {
      this.garage = garage;
    }
    if (this.garage) {
      this.backendService.getOccupanciesByName(this.garage['name']).subscribe((res: any) => {
        this.occupancies = res.data;
      });
    }
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
    if (this.occupancies) {
      const occupancy = this.occupancies.find((ele) => {
        return ele.decal === decalName;
      });
      const total = this.garage['decals'].find((ele) => ele.name === decalName).specCapacity;
      if (!occupancy) { return 0; }
      return Math.ceil(occupancy.currOccupancy / total * 100);
    }
    return 0;
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

  updateParked() {
    this.parked = JSON.parse(localStorage.getItem('parked')) ? true : false;
  }

  onUnparkClick() {
    const parked = JSON.parse(localStorage.getItem('parked'));
    this.backendService.addOccupancy(parked.decal).subscribe((res: any) => {
      localStorage.removeItem('parked');
      this.parked = false;
      this.updateGarageInfo();
      this.snackBar.open('Thank you for parking!', '', {
        duration: 2000
      });
    });
  }

  ngOnInit() {
    this.decals.setValue(JSON.parse(localStorage.getItem('UserSettings')));
    if (JSON.parse(localStorage.getItem('parked'))) {
      this.parked = true;
    }
  }
}
