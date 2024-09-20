import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { SignInResponse } from './models/signin-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = `${environment.apiUrl}/Auth`; // Use the base API URL from environment

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<SignInResponse> {
    const url = `${this.authUrl}/sign-in`;
    const body = { email, password };

    return this.http.post<SignInResponse>(url, body).pipe(
      map((response: SignInResponse) => {
        if (response.success) {
          this.storeTokens(response.token, response.refreshToken);
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private storeTokens(token: string, refreshToken: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw new Error('Failed to sign in. Please try again later.');
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
  clearTokens(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }
}
