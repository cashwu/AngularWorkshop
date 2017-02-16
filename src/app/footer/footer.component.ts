import {Input, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  todos: any[];

  constructor() { }

  ngOnInit() {
  }

  get todoLength() {
    return this.todos.filter(a => !a.done).length;
}


}
