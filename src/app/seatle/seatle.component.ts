import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherserviceService } from './../weatherservice.service';

@Component({
  selector: 'app-seatle',
  templateUrl: './seatle.component.html',
  styleUrls: ['./seatle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeatleComponent implements OnInit {
  weatherinfo;
  constructor(private _weatherserviceService:WeatherserviceService) {
    this._weatherserviceService.retrieveData("seattle",(info)=>{
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
