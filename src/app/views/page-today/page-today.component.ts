import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { isAndroid } from "tns-core-modules/platform";
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Component({
	moduleId: module.id,
	selector: 'page-today',
	templateUrl: './page-today.component.html',
	styleUrls: ['./page-today.component.css']
})

export class PageTodayComponent implements OnInit {
	public rows: string;
	expandToday: boolean = false;


	// @ViewChild('testRef') testRef: ElementRef;

	constructor ( private page: Page ) { 
		if (isAndroid) {
			this.page.actionBarHidden = true;
		}
	}

	ngOnInit() { 
		// let myGridLayout = <GridLayout>this.testRef.nativeElement;
		this.setRows(240);
	}

	private setRows(size) {
		this.rows = "*," + size;
	}

	onSwipe(args: SwipeGestureEventData) {
		if (args.direction === 8) { // down
			this.setRows(20);
			// this.expandToday = true;
		}
		if (args.direction === 4) { //up
			this.setRows(240);
			// this.expandToday = false;
		}
	}

	expandTodayView() {
		console.log(this.expandToday);
		let rowSize = this.expandToday ? 20 : 240;
		this.expandToday = !this.expandToday;
		this.setRows(rowSize);
	}


}