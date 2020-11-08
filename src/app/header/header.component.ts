import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMenuItemClick(event) {
    var el = document.querySelector('.navli');
    if (el) {
      el.classList.remove("navli")
    }

    if (event.currentTarget.classList.contains("active")) {
      event.currentTarget.classList.add("navli");
    } else {
      event.currentTarget.classList.remove("navli");
    }
  }

}
