import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'today-overview',
	templateUrl: './today-overview.component.html',
	styleUrls: ['./today-overview.component.css']
})

export class TodayOverviewComponent implements OnInit {
	today: number = Date.now();

	constructor() { }

	ngOnInit() { }
}