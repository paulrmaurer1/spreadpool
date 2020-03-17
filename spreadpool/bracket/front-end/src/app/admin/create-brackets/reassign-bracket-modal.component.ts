import { Component, OnInit, } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TBracketService } from '../../core/tbracket.service';
import { UserService } from '../../core/user.service';


@Component({
  selector: 'modal-content',
  templateUrl: './reassign-bracket-modal.component.html'
})

export class ReassignModalComponent implements OnInit {
  tbracket_id: number;
  tbracket_name: string;
 
  constructor(
	public confirmReassignModalRef: BsModalRef,
	private _tbracketService: TBracketService,
	private _userService: UserService
	) {}
 
	ngOnInit() {
	}

	reassignBracket(bracket_id: number) {
		// console.log("Tbracket id for re-assignment is", bracket_name);
		this._tbracketService.reassignTbracket(bracket_id, this._userService.token).subscribe((data) => {
			console.log("Tbracket id:", bracket_id, " entries re-assigned!");
		});
	}
}