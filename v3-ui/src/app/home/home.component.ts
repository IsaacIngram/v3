import { Component } from '@angular/core';
import { AboutComponent} from "../about/about.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [AboutComponent]
})
export class HomeComponent {

}
