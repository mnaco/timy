import { Component, OnInit } from '@angular/core';

import { Todo } from "../../../classes/todo";
import { DataTodosService } from "../../../services/data-todos.service";
import { ShareDataService } from "../../../services/share-data.service";

@Component({
	moduleId: module.id,
	selector: 'pending-todos',
	templateUrl: './pending-todos.component.html',
	styleUrls: ['./pending-todos.component.css']
})

export class PendingTodosComponent implements OnInit {
	todos: Todo[];
	selectedCat: number = 100;

	constructor( 
		private dataTodosService: DataTodosService, 
		private shareDataService: ShareDataService
		) { }

	ngOnInit() { 
		this.shareDataService.castActiveCat.subscribe(catId => {
			this.selectedCat = catId;
			this.todos = this.dataTodosService.getTodosByCat(catId);
		});
	}
}