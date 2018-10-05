import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
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
		private dataTodoService: DataTodosService,
		private routerExtension: RouterExtensions
	) { }

	ngOnInit() { 
		const id = +this.activatedRoute.snapshot.params.id;
    this.item = this.dataTodoService.getTodo(id);
	}

	goBack() {
		console.log("back");
		this.routerExtension.back();
	}
}