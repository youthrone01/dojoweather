import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherserviceService } from './../weatherservice.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoComponent implements OnInit {
  weatherinfo;
  constructor(private _weatherserviceService:WeatherserviceService) { 
    this._weatherserviceService.retrieveData("chicago",(info)=>{
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
