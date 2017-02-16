import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputHint = "What needs to be done?";

    todos: any[] = [];

    constructor(private http: Http) {

    }

    ngOnInit(){
        this.http.get("/api/Get?name=cash").subscribe(res =>  {
          this.todos = res.json();
        });
    }


    submitTodo(newTodo: HTMLInputElement) {
        this.todos.push({
            value: newTodo.value,
            done: false
        });
        newTodo.value = "";
    }

    clearCompletedEvent() {
        this.todos = this.todos.filter(a => !a.done);
    }

    btnDelete(todo) {
        let idx = this.todos.indexOf(todo);
        this.todos.splice(idx, 1);

        this.todos = [...this.todos];
    }

    btnSelectAll(status: Boolean) {
        this.todos.map(a => {
            a.done = status
            return a;
        });
    }

    save() {
        this.http.post("/api/post?name=cash", this.todos).subscribe(); // 要 subscribe 才會動
    }
}
