import { Component, OnInit } from '@angular/core';

import { LocationService } from 'src/app/shared/services/location.service';

import { Location } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.css']
})
export class ListLocationsComponent implements OnInit {

  locations: Location[] = [];

  constructor(private _locationService: LocationService) { }

  ngOnInit(): void {
    this._locationService.listLocations()
      .subscribe(data => {
        this.locations = data;
      });
  }

}
