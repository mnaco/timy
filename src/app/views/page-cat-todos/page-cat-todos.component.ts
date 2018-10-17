import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Todo } from "../../classes/todo";
import { DataTodosService } from "../../services/data-todos.service";
import { DataCatsService } from "../../services/data-cats.service";

@Component({
	moduleId: module.id,
	selector: 'page-cat-todos',
	templateUrl: './page-cat-todos.component.html',
	styleUrls: ['./page-cat-todos.component.css']
})

export class PageCatTodosComponent implements OnInit {
	todos: Todo[];
	cat: any;

	constructor(
		private dataTodoService: DataTodosService,
		private dataCatsService: DataCatsService,
		private activatedRoute: ActivatedRoute,
		private routerExtension: RouterExtensions
	) { 
	}

	ngOnInit() {
		const id = +this.activatedRoute.snapshot.params.id;
		this.todos = this.dataTodoService.getTodosByCat(id);
		this.cat = this.dataCatsService.getCat(id).name;
	}

	goBack() {
		this.routerExtension.back();
	}

}