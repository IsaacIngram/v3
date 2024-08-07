import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Project} from "../Project";
import {RouterLink} from "@angular/router";
import {ProjectService} from "../project.service";

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
    protected projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {

    this.projectService.getProjects().subscribe(projects => {
        this.all_projects = projects;
        for (let project of projects) {
          if(project.featured) {
            this.featured_projects.push(project)
          }
        }
    })

    // Display featured projects
    this.displayed_projects = this.featured_projects
  }

  toggleViewAllProjects(): void {
    if(this.showAll) {
      this.showAll = false;
      this.displayed_projects = this.featured_projects;
      console.log("ProjectsComponent: Show featured projects")
    } else {
      this.showAll = true;
      this.displayed_projects = this.all_projects;
      console.log("ProjectsComponent: Show all projects")
    }
  }

}
