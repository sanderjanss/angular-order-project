import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Item} from "../model/item";
import {environment} from "../../environments/environment";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }

  constructor(private http: HttpClient, private messageService : MessageService) { }

  itemUrl = `${environment.backendUrl}/items`;

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl).pipe(
      tap(_ => this.log('fetched items')),
      catchError(this.handleError<Item[]>('getItems', [])));
    }

  findByName(name: string): Observable<any> {
    return this.http
      .get(`${this.itemUrl}/${name}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
