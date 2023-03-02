import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  public tableData1: TableData;


  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['TITLE','AUTHOR','TAGS','RETURN DATE',''],
      dataRows: [
      ]
  };
  }

}
