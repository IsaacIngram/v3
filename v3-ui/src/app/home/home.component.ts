import { Component } from '@angular/core';
import { AboutComponent} from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import {SocialIconsComponent} from "../social-icons/social-icons.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [AboutComponent, ProjectsComponent, SocialIconsComponent]
})
export class HomeComponent {

}
