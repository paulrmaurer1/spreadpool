import { Component, OnInit, TemplateRef } from '@angular/core';
import { TBracketService } from '../../core/tbracket.service';
import { EntryService } from '../../core/entry.service';

import { TBracketData, EntryData } from '../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.css']
})
export class SendEmailsComponent implements OnInit {

	_tbracketList: TBracketData[];
	sendOrigModalRef: BsModalRef;
	emailTargetList: string[];

	constructor(
		private _tbracketService: TBracketService,
		private _entryService: EntryService,
		private modalService: BsModalService,
	) { }

	ngOnInit() {
		this.resetList();
	}

	resetList() {
		//refresh Tbracket list
		this._tbracketService.getList().subscribe(data => {
			this._tbracketList = data;
		})
		// console.log("Tbracket List has been reset")
	} // end resetList()

	openSendOrigModal(bracket_id: number, bracket_name: string) {
		this._entryService.getEntryListByBracket(bracket_id).subscribe(data => {
			const emailTargetList = data.map(target => {
				return target.player;
			});
			// Create a unique list of targets users, eliminating duplicates of owner(s) having 2+ entries
			this.emailTargetList = emailTargetList.filter(function(item, pos) {
			    return emailTargetList.indexOf(item) == pos;
			})
			// console.log("List of players = ", this.emailTargetList);
			const initialState = {
				tbracket_id: bracket_id,
				tbracket_name: bracket_name,
				emailTargetList: this.emailTargetList,
				num_targets: this.emailTargetList.length
			};
			this.sendOrigModalRef = this.modalService.show(SendOrigModalComponent, {initialState});
		})
		
		this.modalService.onHidden.subscribe((reason: string) => {
	    	// Upon modal being closed run these actions
	        this.resetList();
	    })

		// console.log("Tbracket ", bracket_name, " with id: ", bracket_id, "will invoke send_emails API");
	}

}



/* Below are components referenced by the above function */

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Confirm Send Original Teams Email</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="sendOrigModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h6>Are you sure you want to send emails to these {{num_targets}} players of <strong>{{ tbracket_name }}</strong> bracket?</h6>
      <ol>
	      <li *ngFor = "let target of emailTargetList; let i = index">{{ target }}</li>
      </ol>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success" (click)="sendOrigModalRef.hide(); 
      sendOriginalTeamsEmail(tbracket_id)">Send emails</button>
    </div>
  `
})
 
export class SendOrigModalComponent implements OnInit {
  tbracket_id: number;
  tbracket_name: string;
  emailTargetList: string[];
  num_targets: number;
 
  constructor(
	public sendOrigModalRef: BsModalRef,
	private _entryService: EntryService,
	) {}
 
	ngOnInit() {
	}

	sendOriginalTeamsEmail(bracket_id: number) {
		// console.log("Tbracket with id: ", bracket_id, "will invoke send_emails API");
		
		this._entryService.emailOrigTeamsToOwners(bracket_id).subscribe((data) => {
			console.log("Tbracket with id: ", data['tbracketid'] ," have had emails sent!");
		});
	}
}