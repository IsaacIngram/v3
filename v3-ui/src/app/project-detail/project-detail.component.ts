import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MarkdownComponent} from "ngx-markdown";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    MarkdownComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  content: string | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.loadProjectContent();
  }

  loadProjectContent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.http.get(`assets/projects/project${id}/project${id}.md`, {responseType: 'text'})
      .subscribe(data => {
        this.content = data;
      })
  }

}
