import { Component, OnInit, TemplateRef } from '@angular/core';
import { TBracketService } from '../../core/tbracket.service';
import { TBracketData, EntryData } from '../../shared/interfaces';
import { UserService } from '../../core/user.service';
import { EntryService } from '../../core/entry.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-brackets',
  templateUrl: './create-brackets.component.html',
  styleUrls: ['./create-brackets.component.css']
})
export class CreateBracketsComponent implements OnInit {

	_tbracketList: TBracketData[];
	bracketAddForm: FormGroup;
	bracket_name : AbstractControl;
	new_bracket : TBracketData;
	deleteModalRef: BsModalRef;

	constructor(
		private _tbracketService: TBracketService,
		private _userService: UserService,
		private fb: FormBuilder,
		private modalService: BsModalService,
		private _entryService: EntryService,
		private router: Router,
		) {

		this.bracketAddForm = fb.group({
			'bracket_name' : ['', Validators.required],
		});

		this.bracket_name = this.bracketAddForm.controls['bracket_name']; // allows for other properties, e.g. error values

	 }

	ngOnInit() {
		this.new_bracket = {'id': null, 'name': '', 'entry_count': null};  //initialize new_bracket
		this.resetList();

	}

	addBracket(value: string) {
		this.new_bracket.name = this.bracket_name.value;
		// console.log ("New Bracket name is: ", this.new_bracket);
		
		this._tbracketService.createTbracket(this.new_bracket, this._userService.token).subscribe((data) => {
			// console.log("Tbracket added:", value);
			this.bracketAddForm.reset(); // clear out fields after form submit
			this.resetList();
		});
		
	} //end addBracket()

	reassignBracket(bracket_id: number, bracket_name: string) {
		// console.log("Tbracket id for re-assignment is", bracket_name);
		this._tbracketService.reassignTbracket(bracket_id, this._userService.token).subscribe((data) => {
			console.log(bracket_name, " Tbracket entries re-assigned!");
		});
	}

	resetBracket(bracket_id: number, bracket_name: string) {
		this._tbracketService.resetTbracket(bracket_id).subscribe((data) => {
			console.log(bracket_name, " Tbracket has been reset!");
		});
	}

	resetList() {
		//refresh Tbracket list
		this._tbracketService.getList().subscribe(data => {
			this._tbracketList = data;
		})
		// console.log("Tbracket List has been reset")
	} // end resetList()

	openDeleteModal(bracket_id: number, bracket_name: string) {
		const initialState = {
			tbracket_id: bracket_id,
			tbracket_name: bracket_name
		};
		this.deleteModalRef = this.modalService.show(DeleteModalComponent, {initialState});

		this.modalService.onHidden.subscribe((reason: string) => {
	    	// Upon modal being closed run these actions
	        this.resetList();
	    })

	} // end openDeleteModeal()

	resetEntries() {
		// Delete all entries, then create all new Entries based on User registration data
		this._entryService.resetAllEntries().subscribe((data) => {
			console.log("All Entries have been deleted, then re-created based on User data!");
		});

	} //end resetEntries()


	navToAssign(tbracket_id: number) {

		this.router.navigate(['/admin/a-brackets', tbracket_id]);
	
	} //end navToAssign

}

/* This is the component which we pass in openDeleteModal */

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Confirm Bracket Deletion</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="deleteModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h6>Are you sure you want to delete the <strong>{{ tbracket_name }}</strong> bracket?</h6>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="deleteModalRef.hide(); deleteBracket(tbracket_id)">Delete</button>
    </div>
  `
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