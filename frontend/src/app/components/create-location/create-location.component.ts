import { Component, OnInit } from '@angular/core';

import { LocationService } from 'src/app/shared/services/location.service';

import { Location } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  location: Location = new Location();
  locationList: Location[] = [];
  success: string = '';
  error: string = '';

  constructor(private _locationService: LocationService) { }

  ngOnInit(): void {
    this._locationService.listLocations()
      .subscribe(data => {
        this.locationList = data;
      });
  }

  submitForm(): void {
    this._locationService.createLocation(this.location)
      .subscribe(data => {
        console.log(data);
        this.success = 'Información guardada exitosamente!';
      }, error => {
        console.error(error);
        this.error = 'Ha ocurrido un error intentando guardar la información. ' + error.error.message;
      }, () => {
        window.location.reload();
      });

  }
}
