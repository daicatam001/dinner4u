import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor() {}
  reset() {
    return {
      page: 1,
      size: 8
    };
  }
}
