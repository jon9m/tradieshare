import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {
  bricksImagePath = "/tradeshare/assets/img/bricks.png"
  sandImagePath = "/tradeshare/assets/img/sand.png"

  constructor() { }

  ngOnInit(): void {
  }

}
