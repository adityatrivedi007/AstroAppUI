import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PrintpageComponent} from './printpage/printpage.component';
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
path: 'printpage',
component: PrintpageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
