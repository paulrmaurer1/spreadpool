import { Component, OnInit, TemplateRef } from '@angular/core';
import { EntryService } from '../../core/entry.service';

import { EntryData } from '../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  templateUrl: './send-orig-modal.component.html'
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