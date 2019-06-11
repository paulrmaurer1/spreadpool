import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roster-textbox',
  // templateUrl: './roster-textbox.component.html',
  template: `
        Search by Name: <input type="text" [(ngModel)]="filter" />
    `,
  styleUrls: ['./roster-textbox.component.css']
})
export class RosterTextboxComponent implements OnInit {

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
