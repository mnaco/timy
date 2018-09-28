import { Component, OnInit } from '@angular/core';

import { Cat } from "../../classes/cat";
import { DataCatsService } from "../../services/data-cats.service";
import { Page } from 'tns-core-modules/ui/page/page';
import { isAndroid } from "tns-core-modules/platform";

@Component({
	moduleId: module.id,
	selector: 'page-cats',
	templateUrl: './page-cats.component.html',
	styleUrls: ['./page-cats.component.css']
})

export class PageCatsComponent implements OnInit {
	cats: Cat[] = [];
	title: string = "Hello";

	constructor ( 
		private dataCatsService: DataCatsService,
		private page: Page 
	) { 
		if (isAndroid) {
			this.page.actionBarHidden = true;
		}
	}

	ngOnInit() { 
		this.cats = this.dataCatsService.getCats();
	}
}