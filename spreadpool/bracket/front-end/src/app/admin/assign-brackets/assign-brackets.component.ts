import { Component, OnInit } from '@angular/core';
import { EntryNameData, TBracketData } from '../../shared/interfaces';
import { EntryService } from '../../core/entry.service';
import { TBracketService } from '../../core/tbracket.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-brackets',
  templateUrl: './assign-brackets.component.html',
  styleUrls: ['./assign-brackets.component.css']
})
export class AssignBracketsComponent implements OnInit {

	_unassignedEntries: EntryNameData[];
	_assignedEntries: EntryNameData[];
	_activeBracket: TBracketData;
	private id: number; //capture tbracket id url parameter
	_assignEntries_len: number;
	_unassignedEntries_len: number;
	_tbracketList: TBracketData[];

	constructor(
		private _entryService: EntryService, 
		private route: ActivatedRoute,
		private _tbracketService: TBracketService,
		private router: Router) { }

	ngOnInit() {

		// Find tbracket id from parameter of url and refresh data
		this.route.params.subscribe((params) => {
			this.id = params['id'];
			this.refreshData(this.id);
		});
			
		// Update bracket list to build drop-down menu contents
		this._tbracketService.getList().subscribe(data => {
			this._tbracketList = data;
		});
		
	}

	refreshData(tbracket_id: number) {
		// Update arrays to show in picklists as well as activeBracket for proper page display

		this._tbracketService.getTbracket(tbracket_id).subscribe((data) => {
			this._activeBracket = data;
		});

		this._entryService.getEntryListByBracket(tbracket_id).subscribe((data) => {
			this._assignedEntries = data;
			this._assignEntries_len = this._assignedEntries.length;
			// console.log("Entries that have bracket = ", this._activeBracket.name, " assigned: ", this._assignedEntries);
		});

		// source array = all entries without a tbracket assigned (_unassignedEntries)
		this._entryService.getEntryListbyNullBracket().subscribe((data) => {
			this._unassignedEntries = data;
			this._unassignedEntries_len = this._unassignedEntries.length;
			// console.log("Entries that don't have a bracket assigned: ", this._unassignedEntries);
		});
	}

	saveAndGoBack() {
		//Update tbracket_id for all entries in target array isn't already assigned tbracket_id
		this._assignedEntries.forEach((entry) => {
			if (entry.tbracket != this._activeBracket.id) {
				entry.tbracket = this._activeBracket.id;
				// console.log ("Updated entry is: ", entry);
				this._entryService.updateEntry(entry).subscribe((data) => {
				// console.log ("Entry updated for...", entry, data);
				})
			}
		});

		//Update tbracket_id for all entries in source array whose tbracket isn't null
		this._unassignedEntries.forEach((entry) => {
			if (entry.tbracket != null) {
				entry.tbracket = null;
				// console.log ("Updated entry is: ", entry);
				this._entryService.updateEntry(entry).subscribe((data) => {
				// console.log ("Entry updated for...", entry, data);
				})
			}
		});

		this.router.navigate(['/admin/c-brackets']);		

	} //end saveAndGoBack()

	goBack() {
		//Just go back to Admin->Create Brackets page without making changes
		this.router.navigate(['/admin/c-brackets']);	
	} //end goBack()

	// method to run each time an entry gets moved between lists, for updating title of each picklist
	recalculate() {
		this._assignEntries_len = this._assignedEntries.length;
		this._unassignedEntries_len = this._unassignedEntries.length;
	}

	// onBracketSelected(tbracket_id: number) {
  onBracketSelected(tbracket_id: string) {
    var tbracket_id_num: number = Number(tbracket_id);
		this.refreshData(tbracket_id_num);
	}

}
