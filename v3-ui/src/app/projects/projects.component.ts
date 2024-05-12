import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

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
  projects: String[] = []

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.projects = ["Project 1", "Project 2"]
  }
}
