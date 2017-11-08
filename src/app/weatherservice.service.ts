
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherserviceService {
  cityweather;

  constructor(private _http: Http) { }

  retrieveData(city, callback){
  this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f830bb2ac5564eb2770257163cb801a1').subscribe( 
    (response) => { 
      this.cityweather = response.json();
      callback(response.json());
     }, // <— firstCallback
    (error) => { 
      console.log(error);
      callback(error.json());
     } // <— secondCallback
  );
  }
}
