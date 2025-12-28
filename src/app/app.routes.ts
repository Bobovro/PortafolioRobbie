import { Routes } from '@angular/router';
import {Home} from './component/home/home';
import {About} from './component/about/about';
import {Skills} from './component/skills/skills';
import {Projects} from './component/projects/projects';
import {Contact} from './component/contact/contact';
import {Certificaciones} from './component/home/certificaciones/certificaciones';
import {AuditoriaComponent} from './component/home/auditoria/auditoria';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About},
  { path: 'skills', component: Skills},
  { path: 'projects', component: Projects},
  { path: 'contact', component: Contact},
  { path: 'home/certificaciones', component: Certificaciones },
  { path: 'home/auditoria', component: AuditoriaComponent },

  // fallback
  { path: '**', redirectTo: '' }
];
