import { Component, OnInit, Input } from '@angular/core';
import { TimeSpan } from '../../../classes/timspan'

@Component({
	moduleId: module.id,
	selector: 'time-span',
	templateUrl: './time-span.component.html',
	styleUrls: ['./time-span.component.css']
})

export class TimeSpanComponent implements OnInit {
	@Input() spans: number[] = [];
	@Input() style: string;

	constructor() { }

	ngOnInit() { 
		// this.spans = [100, 20, 0];
	}
}