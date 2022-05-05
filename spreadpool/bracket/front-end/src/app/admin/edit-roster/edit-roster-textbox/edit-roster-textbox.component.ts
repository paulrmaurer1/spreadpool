import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-roster-textbox',
  // templateUrl: './edit-roster-textbox.component.html',
  template: `
        Search by Name/Email: <input type="text" [(ngModel)]="filter" />
    `,
  styleUrls: ['./edit-roster-textbox.component.css']
})
export class EditRosterTextboxComponent implements OnInit {

  private _filter: string;
	
    @Input() get filter() {
        return this._filter;
    }
    
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

	constructor() { }

	ngOnInit() {
	}

}