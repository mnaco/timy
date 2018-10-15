import { Component, OnInit } from '@angular/core';

import { Todo } from "../../classes/todo";
import { DataTodosService } from "../../services/data-todos.service";
import { Page } from 'tns-core-modules/ui/page/page';
import { isAndroid } from 'tns-core-modules/platform';

@Component({
	moduleId: module.id,
	selector: 'page-todos',
	templateUrl: './page-todos.component.html',
	styleUrls: ['./page-todos.component.css']
})

export class PageTodosComponent implements OnInit {
	todos: Todo[] = [];
	scheduledTodos = [];
	selectedTodo: number;

	constructor(
		private dataTodoService: DataTodosService,
		private page: Page
	) { 
		if (isAndroid) {
			this.page.actionBarHidden = true;
		}
	}

	ngOnInit() {
		this.todos = this.dataTodoService.getTodos();
		this.scheduledTodos = this.dataTodoService.getGroupByTodos(this.todos, 'due');
	}

	selectTodo(id){
		console.log(id);
		this.selectedTodo = this.selectedTodo !== id ? id : undefined;
	}

	// public templateSelector(item: Todo, index: number, items: Todo[]) {
	// 	if (item.due === 1) {
	// 		return "today"
	// 	} 
		
	// 	if (item.due === 2) {
	// 		return "tomorrow";
	// 	}
	// 	if (item.due === 0 ) {
	// 		return "someday";
	// 	}
		
	// 	throw new Error("Unrecognized template!")
	// }
	

}