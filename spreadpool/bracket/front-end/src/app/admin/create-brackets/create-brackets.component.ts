import { Component, OnInit, TemplateRef } from '@angular/core';
import { TBracketService } from '../../core/tbracket.service';
import { TBracketData, EntryData } from '../../shared/interfaces';
import { UserService } from '../../core/user.service';
import { EntryService } from '../../core/entry.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteModalComponent } from './delete-bracket-modal.component';
import { ReassignModalComponent } from './reassign-bracket-modal.component';
import { ResetModalComponent } from './reset-bracket-modal.component';

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
	confirmEntriesModalRef: BsModalRef;
	showEntriesMsg: boolean;
	entriesMsg: string = '';
	confirmReassignModalRef: BsModalRef;
	confirmResetModalRef: BsModalRef;

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

	ngOnChanges() {
		this.resetList();
		this.showEntriesMsg = false;
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

	resetList() {
		//refresh Tbracket list
		this._tbracketService.getList().subscribe(data => {
			this._tbracketList = data;
		})
		// console.log("Tbracket List has been reset")
	} // end resetList()

	// function to invoke when click on 'Assign Entries' so navigates properly
	navToAssign(tbracket_id: number) {
		this.router.navigate(['/admin/a-brackets', tbracket_id]);
	} //end navToAssign

	
	// function to open confirmEntries template modal followed by button functions
	openEntriesModal(template: TemplateRef<any>) {
		this.confirmEntriesModalRef = this.modalService.show(template, {class: 'modal-lg'})
	}
	confirmDeleteEntries(): void {
		this._entryService.resetAllEntries().subscribe((data) => {
			console.log("All Entries have been deleted, then re-created based on User data!");
			this.confirmEntriesModalRef.hide();
			this.entriesMsg = "All Entries have been deleted & re-created!";
			this.showEntriesMsg = true;
			this.resetList();
		});
	}
	declineDeleteEntries(): void {
		this.confirmEntriesModalRef.hide();
	}

	// function to open delete-bracket-modal.component.ts component modal
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


	// code for Bracket -> Reassign confirmation popup component modal
	openReassignModal(bracket_id: number, bracket_name: string) {
		const initialState = {
			tbracket_id: bracket_id,
			tbracket_name: bracket_name
		};
		this.confirmReassignModalRef = this.modalService.show(ReassignModalComponent, {initialState});
	
		this.modalService.onHidden.subscribe((reason: string) => {
	    	// Upon modal being closed run these actions
	        this.resetList();
	    })

	} // end openReassignModal()


	// code for Bracket -> Reset confirmation popup component modal
	openResetModal(bracket_id: number, bracket_name: string) {
		const initialState = {
			tbracket_id: bracket_id,
			tbracket_name: bracket_name
		};
		this.confirmResetModalRef = this.modalService.show(ResetModalComponent, {initialState});
	
		this.modalService.onHidden.subscribe((reason: string) => {
	    	// Upon modal being closed run these actions
	        this.resetList();
	    })

	} // end openReassignModal()

} // export class CreateBracketsComponent