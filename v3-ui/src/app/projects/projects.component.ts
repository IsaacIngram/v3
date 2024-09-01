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
  error_message: string | null = null

  showAll: boolean = false

  constructor(
    protected projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {

    const projectBitsNBytes: Project = {
      id: 0,
      name: "Bits 'n Bytes",
      thumbnail: "",
      description: "A new type of vending machine that utilizes computer vision and load cells to make decisions.",
      featured: true
    }
    this.all_projects.push(projectBitsNBytes)

    const projectSummerOrienteering: Project = {
      id: 1,
      name: "Summer Orienteering",
      thumbnail: "",
      description: "A 3D path finding program to assist in planning for an orienteering adventure.",
      featured: true
    }
    this.all_projects.push(projectSummerOrienteering)

    const projectSproutChaperone: Project = {
      id: 2,
      name: "Sprout Chaperone",
      thumbnail: "",
      description: "An electronic moisture monitor for plants.",
      featured: true
    }
    this.all_projects.push(projectSproutChaperone)

    for (let i = 0; i < this.all_projects.length; i++) {
      if (this.all_projects[i].featured) {
        this.featured_projects.push(this.all_projects[i])
      }

    }

    // this.projectService.getProjects().subscribe({
    //   next: projects => {
    //     this.all_projects = projects;
    //     for (let project of projects) {
    //       if (project.featured) {
    //         this.featured_projects.push(project)
    //       }
    //     }
    //   },
    //   error: err => {
    //     this.error_message = "Error"
    //   }
    // })

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
