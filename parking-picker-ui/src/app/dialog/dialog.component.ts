import { Component, Inject, OnChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-park-dialog',
  styleUrls: ['./dialog.component.css'],
  templateUrl: './dialog.component.html',
})
export class ParkDialogComponent implements OnChanges {
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
            { name: 'Orange/Blue', value: 'orangeBlue' }];
    decalList = [];
    decals = new FormControl();

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data);

        if (data.garageDecals === undefined) {
            return;
        }

        data.garageDecals.decals.forEach((ele, ind) => {
            if (data.permissions.length === 0 || data.permissions.includes(ele.name)) {
                this.lut.some((d) => {
                    if (d.value === ele.name) {
                        this.decalList.push(d);
                        return true;
                    }
                });
            }
        });

        console.log(this.decalList);
    }

    ngOnChanges(changes) {
        console.log(changes);

        if (changes.permissions) {
            if (changes.permissions.currentValue.length > 0) {
                this.decalList = changes.permission;
            }
        }
    }
}
