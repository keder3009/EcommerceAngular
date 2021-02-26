import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [1,1,1,1,1];
  }

}
