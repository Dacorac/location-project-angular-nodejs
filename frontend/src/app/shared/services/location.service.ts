import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { baseURL } from '../../constants/constants';

import { Location } from 'src/app/shared/models/location.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  /**
   * Create location service
   * @param data 
   */
  createLocation(data) {
    return this.http.post(`${baseURL}/create`, data);
  }

  /**
   * List all locations data
   */

   listLocations() {
     return this.http.get<Location[]>(`${baseURL}/all`);
   }
}
