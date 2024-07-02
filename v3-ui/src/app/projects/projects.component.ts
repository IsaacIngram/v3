import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Project} from "../Project";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  displayed_projects: Project[] = []
  all_projects: Project[] = []
  featured_projects: Project[] = []

  showAll: boolean = false

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
    const mockProject1: Project = {
      id: 1,
      name: "Bits N Bytes",
      thumbnail: "test",
      description: "A new type of vending machine that utilizes computer vision and load cells to make decisions.",
    };
    this.all_projects.push(mockProject1)
    this.featured_projects.push(mockProject1)
    const mockProject2: Project = {
      id: 2,
      name: "Sprout Chaperone",
      thumbnail: "test",
      description: "An electronic moisture monitor for plants.",
    };
    this.all_projects.push(mockProject2)
    this.displayed_projects = this.featured_projects
  }

  toggleViewAllProjects(): void {
    if(this.showAll) {
      this.showAll = false;
      this.displayed_projects = this.featured_projects;
    } else {
      this.showAll = true;
      this.displayed_projects = this.all_projects;

    }
  }

}
