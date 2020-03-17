import { Component, OnInit, } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TBracketService } from '../../core/tbracket.service';


@Component({
  selector: 'modal-content',
  templateUrl: './reset-bracket-modal.component.html'
})

export class ResetModalComponent implements OnInit {
  tbracket_id: number;
  tbracket_name: string;
 
  constructor(
	public confirmResetModalRef: BsModalRef,
	private _tbracketService: TBracketService,
	) {}
 
	ngOnInit() {
	}

	resetBracket(bracket_id: number, bracket_name: string) {
			this._tbracketService.resetTbracket(bracket_id).subscribe((data) => {
				console.log(bracket_name, " Tbracket has been reset!");
			});
	}
}