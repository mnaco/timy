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
	}
}