import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class DataTodosService {

  todos: Todo[] = [
    { id: 0, title: "Todo 1", complete: false, list: 0, due: 1, timespans: [100, 20, 0] },
    { id: 1, title: "Todo 2", complete: false, list: 1, due: 0, timespans: [80, 0] },
    { id: 2, title: "Todo 3", complete: false, list: 0, due: 0, timespans: [50, 0] },
    { id: 3, title: "Todo 4", complete: false, list: 0, due: 0, timespans: [0, 0, 0, 0, 0, 0, 0] },
    { id: 4, title: "Todo 5", complete: false, list: 1, due: 1, timespans: [0, 0] },
    { id: 5, title: "Todo 6", complete: false, list: 0, due: 1, timespans: [100, 70, 0, 0] },
    { id: 6, title: "Todo 7", complete: false, list: 3, due: 0, timespans: [0, 0] },
    { id: 7, title: "Todo 8", complete: false, list: 2, due: 0, timespans: [100, 100] },
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  getTodosByCat(catId:number): Todo[] {
    return this.todos.filter(todo => todo.list === catId);
  }

  getTodayTodos(): Todo[] {
    return this.todos.filter(todo => todo.due === 1);
  }

}