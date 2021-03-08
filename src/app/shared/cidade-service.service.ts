import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators'
import { Cidade } from './cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeServiceService {
  header = {
    Accept: 'application/json'
  };
  requestOptions = {
    headers: new HttpHeaders(this.header),
  }

  constructor(private http: HttpClient) { }
  

  saveCidade(cidade: Cidade): Observable<Cidade> {
    return this.http
      .post<Cidade>("/api/cidade",cidade, this.requestOptions)
      .pipe(map((res: Cidade) => {
        console.log(res)
        return res;
      }),
      catchError( err => {
        throw 'error: ' + err
      }));
  }

  getCidade(): Observable<Cidade[]> {
    return this.http
      .get<Cidade[]>("/api/cidade?search=")
      .pipe(map((res: Cidade[]) => {
        console.log(res)
        return res;
      }));
  }
}
