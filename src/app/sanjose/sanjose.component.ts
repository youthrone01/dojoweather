import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherserviceService } from './../weatherservice.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SanjoseComponent implements OnInit {
  weatherinfo;
  constructor(private _weatherserviceService:WeatherserviceService) {
    this._weatherserviceService.retrieveData("sanjose,us",(info)=>{
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
