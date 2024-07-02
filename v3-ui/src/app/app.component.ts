import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SocialIconsComponent} from "./social-icons/social-icons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialIconsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v3-ui';
}
