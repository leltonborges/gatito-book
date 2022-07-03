import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  private _titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  get titulo() : string {
    return this._titulo;
  }

  @Input()
  set titulo( value : string ) {
    this._titulo = value;
  }
}
