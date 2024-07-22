import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private apiKey = environment.API_KEY;
  private apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  searchSeries(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&s=${title}&type=series`);
  }

  getImdbEntry(imdbId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&i=${imdbId}`);
  }



}