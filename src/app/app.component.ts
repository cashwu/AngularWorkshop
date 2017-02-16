import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputHint = "What needs to be done?";

    todos :any[] = [];

    submitTodo(newTodo : HTMLInputElement){
        this.todos.push({
          value : newTodo.value,
          done : false
        });
        newTodo.value = "";
    }

    clearCompletedEvent(){
      this.todos = this.todos.filter(a => !a.done);
    }
}
