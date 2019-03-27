import { Injectable } from "@angular/core";

import { Todo } from "../models/todo";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoListService {
  private endpoint = "http://localhost:3000/api/todo-list";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };
  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }
}
