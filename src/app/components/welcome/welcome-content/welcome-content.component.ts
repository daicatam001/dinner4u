import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';
import { ActivatedRoute } from '@angular/router';
import { ResEntity } from 'src/app/core/model/res-entity.model';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

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

  menuList$: Observable<Menu[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.menuList$ = this.route.data.pipe(map(item => item['data']['data']));
  }
}
