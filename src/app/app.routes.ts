import { Routes } from '@angular/router';
import { GarageComponent } from './comonents/garages/garage.component';

export const routes: Routes =  [
    { path: '', redirectTo: 'garages', pathMatch: 'full' },
    { path: 'garages', component: GarageComponent }
];