import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/idata';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  // private URL = 'http://163.172.139.224/wp-json';
  private URL = 'http://163.172.139.224/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {  }

  getWordpress(): Observable<IData[]> {
    return this.http.get<IData[]>(this.URL);
  }
}
