import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Menu} from '../../../core/model/menu.model';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  menuList$: Observable<Menu[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.menuList$ = this.route.data.pipe(map(item => item['data']['data']));
  }

}
