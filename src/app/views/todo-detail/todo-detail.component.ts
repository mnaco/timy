import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Todo } from "../../classes/todo";
import { DataTodosService } from "../../services/data-todos.service";

@Component({
	moduleId: module.id,
	selector: 'todo-detail',
	templateUrl: './todo-detail.component.html',
	styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent implements OnInit {
	item: Todo;

	constructor(
		private activatedRoute: ActivatedRoute,
		private dataTodoService: DataTodosService
	) { }

	ngOnInit() { 
		const id = +this.activatedRoute.snapshot.params.id;
    this.item = this.dataTodoService.getTodo(id);
	}
}