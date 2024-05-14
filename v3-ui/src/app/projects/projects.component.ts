import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Project} from "../Project";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = []

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
    const mockProject1: Project = {
      id: 1,
      name: "Project 1",
    };
    this.projects.push(mockProject1)
    const mockProject2: Project = {
      id: 2,
      name: "Project 2",
    };
    this.projects.push(mockProject2)
  }

}
