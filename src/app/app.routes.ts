import { Routes } from '@angular/router';
import { App } from './app'; 
import { Info } from './info/info'; 


export const routes: Routes = [
    { path: '', component: App },
  { path: 'info', component: Info}
];
