import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SocialIconsComponent} from "./social-icons/social-icons.component";
import {filter, map} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialIconsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Isaac Ingram';

  showFooter: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Get data from router and check for "hideFooter"
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute.firstChild;
        while(route?.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    ).subscribe(route => {
      this.showFooter = !route?.snapshot.data['hideFooter'];
    })
  }

}
