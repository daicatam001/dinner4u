import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';

@Component({
  selector: 'welcome-content',
  templateUrl: './welcome-content.component.html',
  styleUrls: ['./welcome-content.component.scss']
})
export class WelcomeContentComponent implements OnInit {
  menuList: Array<Menu> = [
    {
      dishes: ['Bánh canh ngọt', 'Cơm rang'],
      tags: []
    },
    {
      dishes: ['phở bò'],
      tags: []
    }
  ];

  constructor() {}

  ngOnInit() {}
}
