import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ResumeComponent} from "./resume/resume.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'resume', component: ResumeComponent }
];
