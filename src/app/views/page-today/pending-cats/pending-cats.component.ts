import { Component, OnInit } from '@angular/core';

import { Cat } from "../../../classes/cat";
import { DataCatsService } from "../../../services/data-cats.service";
import { ShareDataService } from "../../../services/share-data.service";

@Component({
	moduleId: module.id,
	selector: 'pending-cats',
	templateUrl: './pending-cats.component.html',
	styleUrls: ['./pending-cats.component.css']
})

export class PendingCatsComponent implements OnInit {
	cats: Cat[];
	selectedCat: number = 0

	constructor(
		private dataCatsService: DataCatsService,
		private shareDataService: ShareDataService
	) { }

	ngOnInit() {
		this.cats = this.dataCatsService.getCats();
    this.shareDataService.castActiveCat.subscribe(catId => this.selectedCat = catId);
	}
	
	selectCat(id) {
		this.shareDataService.updateActiveCat(id);
	}
}