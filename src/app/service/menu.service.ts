import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Menu } from '../core/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('menu');
  }

  public createNew(dishes, tags): Observable<any> {
    return this.httpClient.post(this.baseUrl, { dishes, tags }).pipe(
      tap(res => {
        console.log(2);
      })
    );
  }
  public getWelcomeMenu() {
    return this.fetch('/welcome');
  }
}
