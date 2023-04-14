import { Component, OnInit, TemplateRef } from '@angular/core';
import { TBracketService } from '../../core/tbracket.service';
import { EntryService } from '../../core/entry.service';
import { GameService } from '../../core/game.service';

import { TBracketData, EntryData } from '../../shared/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { SendOrigModalComponent } from './send-orig-modal.component';
import { SendGamesModalComponent } from './send-games-modal.component';


@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.css']
})
export class SendEmailsComponent implements OnInit {

	_tbracketList: TBracketData[];
	sendOrigModalRef: BsModalRef;
	sendGamesModalRef: BsModalRef;
	// emailTargetList: string[];
  emailTargetList: any[];

	constructor(
		private _tbracketService: TBracketService,
		private _entryService: EntryService,
		private _gameService: GameService,
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
      // Create an array of player names to display in modal
      const emailTargetList = data.map(target => ({ id: target.player_id, player:target.player }));
      // console.log("Raw list of players = ", emailTargetList);
			
      // Create a unique list of targets users, eliminating duplicates of owner(s) having 2+ entries
      // this.emailTargetList = emailTargetList.filter((value, index, array) => array.indexOf(value) == index);
      const ids = emailTargetList.map(o => o.id)
      this.emailTargetList = emailTargetList.filter(({id}, index) => !ids.includes(id, index + 1))
			// console.log("De-duped List of players = ", this.emailTargetList);
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

	openSendGamesModal(bracket_id: number, bracket_name: string){
			const initialState = {
				tbracket_id: bracket_id,
				tbracket_name: bracket_name,
			};
			this.sendGamesModalRef = this.modalService.show(SendGamesModalComponent, {initialState});
		// })

		this.modalService.onHidden.subscribe((reason: string) => {
	    	// Upon modal being closed run these actions
	        this.resetList();
	    })

	}


}