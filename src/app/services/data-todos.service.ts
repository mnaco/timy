import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class DataTodosService {

  todos: Todo[] = [
    { id: 0, title: "Introduce the new app including design and mobile test sample", complete: true, list: 0, due: 1, timespans: [100, 100, 100] },
    { id: 1, title: "Answer emails", complete: false, list: 1, due: 0, timespans: [80, 0] },
    { id: 2, title: "Add animation to the top container", complete: false, list: 0, due: 0, timespans: [50, 0] },
    { id: 3, title: "Shopping", complete: false, list: 0, due: 0, timespans: [0, 0, 0, 0, 0, 0, 0] },
    { id: 4, title: "Read the article and write a review", complete: true, list: 1, due: 1, timespans: [100, 100] },
    { id: 5, title: "Review the design", complete: false, list: 0, due: 1, timespans: [100, 50, 0, 0] },
    { id: 6, title: "Update the latest version", complete: false, list: 3, due: 0, timespans: [0, 0] },
    { id: 7, title: "Move new pictures to archive", complete: false, list: 2, due: 0, timespans: [100, 100] },
    { id: 8, title: "Check new version of Adobe XD", complete: false, list: 1, due: 1, timespans: [0, 0] },
    { id: 9, title: "Find a way to animate a layout", complete: false, list: 1, due: 1, timespans: [0] },
    { id: 10, title: "Prepare docs for the application", complete: false, list: 1, due: 1, timespans: [0] },
    { id: 11, title: "Repare", complete: false, list: 2, due: 0, timespans: [0, 0, 0, 0] },
    { id: 12, title: "Read the docs and preoare the form", complete: false, list: 2, due: 0, timespans: [0, 0, 0, 0, 0, 0] },
  ];

  constructor() { }


  getTodo(id: number):Todo {
    return this.todos.filter((item) => item.id === id)[0];
  }

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