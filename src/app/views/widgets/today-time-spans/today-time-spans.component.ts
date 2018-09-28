import { Component, OnInit } from '@angular/core';
import { Todo } from "../../../classes/todo";
import { DataTodosService } from "../../../services/data-todos.service";

@Component({
	moduleId: module.id,
	selector: 'today-time-spans',
	templateUrl: './today-time-spans.component.html',
	styleUrls: ['./today-time-spans.component.css']
})

export class TodayTimeSpansComponent implements OnInit {
	todayTodos: Todo[] = []; 

	constructor( private dataTodosService: DataTodosService) { }

	ngOnInit() { 
		this.todayTodos = this.dataTodosService.getTodayTodos();
	}
}