import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  protected httpClient: HttpClient = this.injector.get(HttpClient);
  constructor(protected injector: Injector) {}
  baseUrl: string;

  public setBaseUrl(path) {
    this.baseUrl = environment.base_url + path;
  }
  public create(data) {
    return this.httpClient.post(this.baseUrl, data);
  }

  public find(data) {
    return this.httpClient.post(this.baseUrl + '/find', data);
  }

  public post(url: string, data) {
    return this.httpClient.post(this.baseUrl + url, data);
  }
  public fetch(url?: string, params?) {
    return this.httpClient.get(this.baseUrl + '/fetch' + url, { params });
  }
}
