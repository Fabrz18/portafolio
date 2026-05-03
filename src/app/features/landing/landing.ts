import { Component } from '@angular/core';
import {Hero} from '../hero/hero';
import {About} from '../about/about';
import {Projects} from '../projects/projects';
import {Skills} from '../skills/skills';
import {ExperienceComponent} from '../experience/experience';
import {Contact} from '../contact/contact';


@Component({
  selector: 'app-landing',
  imports: [
    Hero,
    About,
    Projects,
    Skills,
    ExperienceComponent,
    Contact
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
