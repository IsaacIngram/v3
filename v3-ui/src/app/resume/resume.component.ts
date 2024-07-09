import { Component } from '@angular/core';
import {ResumeService} from "../resume.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resumeUrl: SafeResourceUrl | undefined;

  constructor(
    private resumeService: ResumeService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    const url = this.resumeService.getResumeUrl();
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
