import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/service/menu.service';

@Injectable({ providedIn: 'root' })
export class MenuResolver implements Resolve<Object> {
  constructor(private menuService: MenuService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Object> | Promise<Object> | Object {
    return this.menuService.getWelcomeMenu();
  }
}
