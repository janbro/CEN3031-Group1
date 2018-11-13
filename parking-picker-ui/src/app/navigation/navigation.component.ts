import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  decals = new FormControl();
  decalList: string[] = ['Green', 'Park & Ride', 'Red 1', 'Red 3', 'Brown 2', 'Brown 3', 'Disabled Student', 'Motorcycle/Scooter'];
  decalList1: string[] = ['Gold(Official Gated)', 'Silver(Gated)', 'Official Business', 'Orange', 'Blue', 'Medical Resident', 'Staff Commuter', 'Disabled Employee', 'Carpool', 'Motorctcle/Scooter'];
  constructor() { }

  ngOnInit() {
  }

}
