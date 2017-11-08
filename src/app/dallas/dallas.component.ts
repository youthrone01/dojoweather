import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherserviceService } from './../weatherservice.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DallasComponent implements OnInit {

  weatherinfo;
  constructor(private _weatherserviceService:WeatherserviceService) {
    this._weatherserviceService.retrieveData("dallas",(info)=>{
      if(info.cod == 404){
        this.weatherinfo = 404;
      }else{
        this.weatherinfo = info;
      }
    });
   }

  ngOnInit() {
  }

}
