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
    // Populate all projects. Ideally this will be done by a JSON file or
    // by making HTTP requests in the future.

    const project0: Project = {
      id: 0,
      name: "Bits 'n Bytes",
      thumbnail: "test",
      description: "A new type of vending machine that utilizes computer vision and load cells to make decisions.",
    };
    this.all_projects.push(project0)
    this.featured_projects.push(project0)

    const project1: Project = {
      id: 1,
      name: "Summer Orienteering (Lab for CSCI-331: Intro to AI)",
      thumbnail: "test",
      description: "A 3D path finding program to assist in planning for an orienteering adventure."
    }
    this.all_projects.push(project1)
    this.featured_projects.push(project1)

    const project2: Project = {
      id: 2,
      name: "Sprout Chaperone",
      thumbnail: "test",
      description: "An electronic moisture monitor for plants.",
    };
    this.all_projects.push(project2)

    const project3: Project = {
      id: 3,
      name: "Rapid React Robot",
      thumbnail: "test",
      description: "FIRST Robotics Competition robot equipped with many sensors to enable automated targeting, localization, and safety features.",
    };
    this.all_projects.push(project3)

    // Display featured projects
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
