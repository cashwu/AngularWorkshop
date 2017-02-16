import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getTodos() {

        // this.http.get("/api/Get?name=cash").subscribe(res =>  {
        //   this.todos = res.json();
        // });

        return this.http.get("/api/Get?name=cash").map(x => x.json());
    }

    saveTodos(todos : any[]) {
        this.http.post("/api/post?name=cash", todos).subscribe(); // 要 subscribe 才會動
    }
}
