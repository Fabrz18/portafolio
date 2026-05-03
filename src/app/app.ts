import { Component, signal } from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import {Landing} from './features/landing/landing';

@Component({
  selector: 'app-root',
  imports: [ Navbar, Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
