import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../shared/client';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  listofclient(): Observable<Client[]> {

      // return this.http.get(baseURL + 'Listitem') as Observable<Client[]>;
      return null;
  }

}
