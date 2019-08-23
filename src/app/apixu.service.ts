import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          ' https://api.apixu.com/v1/current.json?key=4122e7be94dd411c855113638192308&q=Paris=' + location
      );
  }
}