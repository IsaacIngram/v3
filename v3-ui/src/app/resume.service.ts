import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getResumeUrl(): string {
    return 'assets/resume/isaac_ingram_resume.pdf'
  }

}
