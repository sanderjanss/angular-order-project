import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService : MessageService) { }

  itemUrl = `${environment.backendUrl}/items`;

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl).pipe(
      tap(_ => this.log('fetched items')),
      catchError(this.handleError<Item[]>('getItems', [])));
    }

  addItem(item: Item):Observable<Item>{
    return this.http.post<Item>(this.itemUrl, item);
  }

  getItem(id: string): Observable<Item>{
    const url = `${this.itemUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }


  updateItem(item: Item): Observable<any>{
    return this.http.put(this.itemUrl, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${item.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
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
