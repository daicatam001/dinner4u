import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl: string;

  public setBaseUrl(path) {
    this.baseUrl = environment.base_url + path;
  }
  public create(data) {
    return this.httpClient.post(this.baseUrl, data);
  }

  public post(url: string, data) {
    return this.httpClient.post(this.baseUrl + url, data);
  }
}
