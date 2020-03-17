import { Component, OnInit, } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TBracketService } from '../../core/tbracket.service';
import { UserService } from '../../core/user.service';


@Component({
  selector: 'modal-content',
  templateUrl: './delete-bracket-modal.component.html'
})

export class DeleteModalComponent implements OnInit {
  tbracket_id: number;
  tbracket_name: string;
 
  constructor(
	public deleteModalRef: BsModalRef,
	private _tbracketService: TBracketService,
	private _userService: UserService
	) {}
 
	ngOnInit() {
	}

	deleteBracket(bracket_id: number) {
		// console.log("deleteBracket method invoked for Tbracket id:", bracket_id);
		this._tbracketService.deleteTbracket(bracket_id, this._userService.token).subscribe((data) => {
			console.log("delete Tbracket successful");
		});
	}
}