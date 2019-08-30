import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
    this.setBaseUrl('menu');
  }

  public create(data): Observable<any> {
    console.log(1);
    return this.httpClient.post(this.baseUrl, data).pipe(
      tap(res => {
        console.log(2);
      })
    );
  }
}
