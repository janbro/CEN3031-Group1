import { Component, Inject, OnChanges } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
            { name: 'Orange/Blue', value: 'orangeBlue' },
            { name: 'Other', value: 'any' }];
    decalList = [];
    decals = null;
    errMsg = '';

    constructor(public dialogRef: MatDialogRef<ParkDialogComponent>,
                    @Inject(MAT_DIALOG_DATA) public data: any,
                    private backendService: BackendService) {
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

        this.decalList.sort(function(a, b) { return a.name < b.name ? -1 : a.name === b.name ? 0 : 1; });
    }

    ngOnChanges(changes) {
        if (changes.permissions) {
            if (changes.permissions.currentValue.length > 0) {
                this.decalList = changes.permission;
                this.decalList.sort(function(a, b) { return a.name < b.name ? -1 : a.name === b.name ? 0 : 1; });
            }
        }
    }

    onParkClick() {
        console.log(this.decals);
        if (!this.decals) {
            this.errMsg = '*required';
            return false;
        } else {
            this.backendService.addOccupancy({name: this.data.garageDecals.name, decal: this.decals, park: true}).subscribe((res: any) => {
                console.log(res);
            });
            this.dialogRef.close();
            return true;
        }
    }
}
