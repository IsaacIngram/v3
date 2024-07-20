import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Project} from "./Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // URL for web API
  private projectEndpoint: string = 'http://127.0.0.1:5000/'

  // Use JSON content type
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Project[]> {
    const url = `${this.projectEndpoint}projects`
    return this.http.get<Project[]>(url).pipe(
        tap(_ => this.log('fetched projects')),
        catchError(this.handleError<Project[]>('getProjects', []))
    );
  }

  getProject(id: number): Observable<Project> {
    const url = `${this.projectEndpoint}projects/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => this.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  private log(message: string) {
    console.log(`ProjectService: ${message}`);
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Log error to console
      console.error(error);
      return of(result as T);
    }
  }

}
