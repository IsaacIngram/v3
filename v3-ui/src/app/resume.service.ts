import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getResumeUrl(): string {
    return 'assets/resume/resume.pdf'
  }

}
