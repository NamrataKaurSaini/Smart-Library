import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Firestore } from 'firebase/firestore';

declare interface TableData {
	headerRow: string[];
	dataRows: string[][];
  }

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
	public tableData1: TableData;

  constructor( private modalService: NgbModal ) { }

  ngOnInit() { 

	this.tableData1 = {
		headerRow: ['USER ID','BOOK ISSUED','AUTHOR','ISSUE DATE','RETURN DATE'],
		dataRows: [
		]
	};

  }

}
