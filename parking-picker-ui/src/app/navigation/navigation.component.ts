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
  decalList: Object[] = [{name:'Green',value:"green"}, {name:'Park & Ride', value:'parkNRide'},{name:'Red 1', value:'red1'}, {name:'Red 3', value:'red3'}, {name:'Brown', value: 'brown'}, {name:'Disabled', value:'handicap'}, {name:'Motorcycle/Scooter', value:'scooter'}];
  decalList1: Object[] = [{name:'Gold',value:'gold'},{name: 'Silver', value:'silver'},{name: 'Official Business', value:'business'}, {name:'Orange', value:'orange'}, {name:'Blue', value:'blue'}, {name:'Medical Resident', value:'medRes'}, {name:'Staff Commuter', value:"staffComm"},{name: 'Disabled', value:'handicap'}, {name:'Carpool', value:'carpool'},{name: 'Motorcycle/Scooter', value:'scooter'}];
  constructor(private backendService: BackendService) { }

  updateSettings()
  {
    this.backendService.getFilteredDecalPermissions(this.decals.value).subscribe((permissions) => {
      this.permissions = permissions;
    });
  }

  ngOnInit() {
  }

}
