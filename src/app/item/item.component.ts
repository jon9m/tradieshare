import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  bricksImagePath = "/tradeshare/assets/img/bricks.png"
  sandImagePath = "/tradeshare/assets/img/sand.png"

  constructor() { }

  ngOnInit(): void {

  }

}
