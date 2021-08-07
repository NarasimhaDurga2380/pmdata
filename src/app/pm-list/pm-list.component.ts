import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { propertyData } from "../app.model";

@Component({
  selector: 'app-pm-list',
  templateUrl: './pm-list.component.html',
  styleUrls: ['./pm-list.component.scss']
})
export class PmListComponent implements OnInit {
  @Input() pmList:propertyData[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
