import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  public tableData1: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['PLAN', 'BOOK ISSUE LIMIT', 'BOOK RETURN PERIOD','PRICE', 'ACTION'],
      dataRows: []
 };
 
  }

}
