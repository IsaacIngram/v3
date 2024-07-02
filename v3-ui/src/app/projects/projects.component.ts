import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Project} from "../Project";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = []

  showAll: boolean = false
  showText: string = "View All"

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
    this.projects.push(mockProject1)
    const mockProject2: Project = {
      id: 2,
      name: "Sprout Chaperone",
      thumbnail: "test",
      description: "An electronic moisture monitor for plants.",
    };
    this.projects.push(mockProject2)
  }

  toggleViewAllProjects(): void {
    if(this.showAll) {
      this.showAll = false;
      this.showText = "View All";
    } else {
      this.showAll = true;
      this.showText = "View Less"
    }
  }

}
