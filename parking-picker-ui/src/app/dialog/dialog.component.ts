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
            { name: 'Any', value: 'any' }];
    decalList = [];
    decals = null;
    errMsg = '';

    constructor(public dialogRef: MatDialogRef<ParkDialogComponent>,
                    @Inject(MAT_DIALOG_DATA) public data: any,
                    private backendService: BackendService) {
        // Don't open modal if no garage data
        if (data.garageDecals === undefined) {
            return;
        }

        // Iterate through decals and retrieve user friendly names
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

    // Update decal list when user changes decal settings
    ngOnChanges(changes) {
        if (changes.permissions) {
            if (changes.permissions.currentValue.length > 0) {
                this.decalList = changes.permission;
                this.decalList.sort(function(a, b) { return a.name < b.name ? -1 : a.name === b.name ? 0 : 1; });
            }
        }
    }

    // On click handler for park button
    onParkClick() {
        // Decal seletion required
        if (!this.decals) {
            this.errMsg = '*required';
            return false;
        } else {
            // Create request to update occupancy data in backend
            this.backendService.addOccupancy({name: this.data.garageDecals.name, decal: this.decals, park: true}).subscribe((res: any) => {
            });
            this.dialogRef.close();
            return true;
        }
    }
}
