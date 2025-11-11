import { Routes } from '@angular/router';
import {Projects} from './components/projects/projects';
import {App} from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'projects', component: Projects }
];
