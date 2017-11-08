import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatleComponent } from './seatle/seatle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { WeatherserviceService } from './weatherservice.service';
import { ChicagoComponent } from './chicago/chicago.component'; // <-- Imported


@NgModule({
  declarations: [
    AppComponent,
    SeatleComponent,
    SanjoseComponent,
    DallasComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule //
  ],
  providers: [WeatherserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
