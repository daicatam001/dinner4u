import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Menu } from '../core/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private apiService: ApiService) {
    this.apiService.setBaseUrl('menu');
  }
  createMenu(menu: Menu) {
    return this.apiService.create(menu);
  }
}
