import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SessionService } from '../session/session.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RestApiService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private httpOptions = { headers: new HttpHeaders(), params: new HttpParams() };

  constructor(private http: HttpClient, private session: SessionService) {}

  login(url: string, body: any): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}`;

    return this.http.post(finalUrl, body).pipe(catchError(error => {
      return of(error);
    }));
  }

  post(url: string, body: any): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}`;

    this.httpOptions.headers =
      this.httpOptions.headers.set(
        'Authorization',
        'Bearer ' + this.session.getToken()
      );

    return this.http.post(finalUrl, body, this.httpOptions);
  }

  put(url: string, body: any, id: string): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}/${id}`;

    this.httpOptions.headers =
      this.httpOptions.headers.set(
        'Authorization',
        'Bearer ' + this.session.getToken()
      );

    return this.http.put(finalUrl, body, this.httpOptions);
  }

  get(url: string, id?: string, params?: any): Observable<any> {
    let finalUrl = '';

    if (id) {
      finalUrl = `${this.baseUrl}/${url}/${id}`;
    } else {
      finalUrl = `${this.baseUrl}/${url}`;
    }

    if (params) {
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          this.httpOptions.params =
            this.httpOptions.params.set(k, params[k]);
        }
      }
    }

    this.httpOptions.headers =
      this.httpOptions.headers.set(
        'Authorization',
        'Bearer ' + this.session.getToken()
      );

    return this.http.get(finalUrl, this.httpOptions).pipe(catchError(error => {
      return of(error);
    }));
  }

  delete(url: string, id: string): Observable<any> {
    let finalUrl = `${this.baseUrl}/${url}`;

    if (id) {
      finalUrl += `/${id}`;
    }

    this.httpOptions.headers =
      this.httpOptions.headers.set(
        'Authorization',
        'Bearer ' + this.session.getToken()
      );

    return this.http.delete(finalUrl, this.httpOptions);
  }

  patch(url: string, body: any, id: string): Observable<any> {
    const finalUrl = `${this.baseUrl}/${url}/${id}`;

    this.httpOptions.headers =
      this.httpOptions.headers.set(
        'Authorization',
        'Bearer ' + this.session.getToken()
      );

    return this.http.patch(finalUrl, body);
  }
}
