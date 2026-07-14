import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { AuthResponse, LoginRequest, RegisterRequest, UserProfile } from '../models/auth.model';
import { environment } from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly currentUserSubject = new BehaviorSubject<UserProfile | null>(this.getStoredUser());

  readonly currentUser$ = this.currentUserSubject.asObservable();
  readonly isAuthenticated$ = this.currentUser$.pipe(map((user) => !!user));

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, credentials).pipe(
      tap((response) => this.persistAuth(response))
    );
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, payload).pipe(
      tap((response) => this.persistAuth(response))
    );
  }

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.apiUrl}/auth/me`).pipe(
      tap((user) => this.currentUserSubject.next(user))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/auth/logout`, {}).pipe(
      tap(() => this.clearSession())
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem(environment.storageKeys.accessToken);
  }

  isAuthenticated(): boolean {
    return this.getAccessToken() !== null;
  }

  clearSession(): void {
    localStorage.removeItem(environment.storageKeys.accessToken);
    localStorage.removeItem(environment.storageKeys.refreshToken);
    localStorage.removeItem(environment.storageKeys.user);
    this.currentUserSubject.next(null);
  }

  private persistAuth(response: AuthResponse): void {
    localStorage.setItem(environment.storageKeys.accessToken, response.token);
    localStorage.setItem(environment.storageKeys.refreshToken, response.refreshToken);

    const profile: UserProfile = {
      id: response.id,
      email: response.email,
      role: response.role,
      nom: response.nomComplet?.split(' ')[0],
      prenom: response.nomComplet?.split(' ').slice(1).join(' ')
    };

    localStorage.setItem(environment.storageKeys.user, JSON.stringify(profile));
    this.currentUserSubject.next(profile);
  }

  private getStoredUser(): UserProfile | null {
    const storedUser = localStorage.getItem(environment.storageKeys.user);
    return storedUser ? (JSON.parse(storedUser) as UserProfile) : null;
  }
}
