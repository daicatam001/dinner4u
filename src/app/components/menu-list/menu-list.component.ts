import { Component, OnInit, ViewChild } from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';
import { PaginationParams } from 'src/app/core/model/pagination-params.model';
import { PaginationService } from 'src/app/service/pagination.service';
import { MenuService } from 'src/app/service/menu.service';
import { ResEntity } from 'src/app/core/model/res-entity.model';
import { LoadingButtonComponent } from 'src/app/shared/components/loading-button/loading-button.component';

@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuList: Array<Menu>;
  paginationParams: PaginationParams;
  @ViewChild(LoadingButtonComponent, { static: false })
  loadingButton: LoadingButtonComponent;
  constructor(
    private paginationService: PaginationService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.paginationParams = this.paginationService.reset();
    this.menuService.find(this.paginationParams).subscribe(
      (res: ResEntity) => {
        this.menuList = res.data || [];
      },
      () => {
        this.menuList = [];
      }
    );
  }
  showMore() {
    this.paginationParams.page++;
    this.loadingButton.loading(true);
    this.menuService.find(this.paginationParams).subscribe((res: ResEntity) => {
      this.menuList = this.menuList.concat(res.data);
      this.loadingButton.loading(false);
    });
  }
}
