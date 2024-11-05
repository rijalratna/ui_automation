
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionService } from './session.service';
import { FileResponse } from './FileResponse';

@Injectable({
  providedIn: 'root'  // Makes this service available application-wide
})
export class ApiService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }
  
  private baseUrl: string = '/api';
  public username: string = '';
  public isLoggedIn: boolean = false;

  // Function to handle login requests
  login(formData: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  // Function to handle signup requests
  signup(formData: any): Observable<any> {
    const url = `${this.baseUrl}/signup/cred`;
    return this.http.post(url, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  loginWithGoogle(): Observable<any> {
    const url = `${this.baseUrl}/signup/google`; // Ensure this URL matches the backend mapping
    return this.http.get(url);
  }

  loginWithFacebook(): Observable<any> {
    const url = `${this.baseUrl}/signup/facebook`;
    return this.http.get(url);
  }

  loginWithAmazon(): Observable<any> {
    const url = `${this.baseUrl}/signup/amazon`;
    return this.http.get(url);
  }

  // Function to handle file uploads for NAS
  submitForm(endpoint: string, formData: FormData): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post(url, formData);
  }
  getAlexaDevices(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/alexa/devices`);
  }

  getAlexaSkills(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/alexa/skills`);
  }

  controlDevice(deviceId: string, command: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/control`, { deviceId, command });
  }
  getDevices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alexa/devices`);
  }

  getSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alexa/skills`);
  }
  //in use
  uploadFiles(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
//in use
deleteFile(username: string, folder: string, fileName: string): Observable<any> {
  const url = `${this.baseUrl}/files?username=${encodeURIComponent(username)}&folder=${encodeURIComponent(folder)}&fileName=${encodeURIComponent(fileName)}`;
  return this.http.delete(url);
}
getUserFiles(username: string): Observable<FileResponse[]> {
  return this.http.get<FileResponse[]>(`${this.baseUrl}/user/${username}`).pipe(
    catchError((error) => {
      console.error("Error fetching files:", error);
      return throwError(() => new Error("Error fetching files from server"));
    })
  );
}

  // Get files in a specific folder
  getFiles(username: string, desiredFolder: string): Observable<FileResponse[]> {
    const url = `${this.baseUrl}/user/${username}/${desiredFolder}`;
    return this.http.get<FileResponse[]>(url)
      .pipe(catchError(this.handleError));
  }

  // Get files by path
  getFilesByPath(path: string): Observable<FileResponse[]> {
    return this.http.get<FileResponse[]>(`${this.baseUrl}/user/${encodeURIComponent(path)}`)
      .pipe(catchError(this.handleError));
  }

  // Handle errors
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
