import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit {
  private _mostraMenu = false;

  constructor() {
  }

  ngOnInit() : void {
  }

  abreMenu() {
    this._mostraMenu = !this._mostraMenu;
  }

  get mostraMenu() : boolean {
    return this._mostraMenu;
  }

  set mostraMenu(value : boolean) {
    this._mostraMenu = value;
  }
}
