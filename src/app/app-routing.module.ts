import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SeatleComponent } from './seatle/seatle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
const routes: Routes = [
  { path: 'seatle', component: SeatleComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'chicago', component: ChicagoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
