import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { isAndroid } from "tns-core-modules/platform";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Todo } from '../../classes/todo';
import { DataTodosService } from '../../services/data-todos.service';

@Component({
	moduleId: module.id,
	selector: 'page-today',
	templateUrl: './page-today.component.html',
	styleUrls: ['./page-today.component.css']
})

export class PageTodayComponent implements OnInit {
	public rows: string;
	expandToday: boolean = false;
	todayTodos: Todo[] = [];

	// @ViewChild('testRef') testRef: ElementRef;

	constructor ( 
		private dataTodosService: DataTodosService,
		private page: Page 
		) { 
		if (isAndroid) {
			this.page.actionBarHidden = true;
		}
	}

	ngOnInit() { 
		// let myGridLayout = <GridLayout>this.testRef.nativeElement;
		// this.setRows(200);
		this.setRows('auto, *');
		this.todayTodos = this.dataTodosService.getTodayTodos();
	}

	private setRows(size) {
		// this.rows = "*, " + size;
		this.rows = size;
	}

	// onSwipe(args: SwipeGestureEventData) {
	// 	if (args.direction === 8) { // down
	// 		this.setRows(20);
	// 		// this.expandToday = true;
	// 	}
	// 	if (args.direction === 4) { //up
	// 		this.setRows(240);
	// 		// this.expandToday = false;
	// 	}
	// }

	expandTodayView() {
		// let rowSize = this.expandToday ? 240 : 20;
		let rowSize = this.expandToday ? 'auto, *' : '*, 20';
		this.expandToday = !this.expandToday;
		this.setRows(rowSize);
	}


}