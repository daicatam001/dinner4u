import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { Menu } from '../core/model/menu.model';
import { PaginationParams } from '../core/model/pagination-params.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('menu');
  }
}
