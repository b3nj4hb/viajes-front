import { Routes } from '@angular/router';
import { HomePageComponent } from './admin/pages/home-page/home-page.component';
import { BusesPageComponent } from './admin/pages/buses-page/buses-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    // { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule), }
];
