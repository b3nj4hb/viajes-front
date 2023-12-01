import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BusesPageComponent } from './pages/buses-page/buses-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomePageComponent,
    children: [
      { path: 'buses', component: BusesPageComponent },
      { path: '**', redirectTo: 'admin' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
