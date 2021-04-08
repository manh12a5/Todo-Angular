import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ITodo} from '../i-todo';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<ITodo> = [];
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  // tslint:disable-next-line:typedef
  toggleTodo(i: any) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}
