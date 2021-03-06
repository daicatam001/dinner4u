import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {
  type: string;
  isShow: boolean;
  onClose: Observable<any>;
  observable;
  constructor() {}

  ngOnInit() {
    this.onClose = new Observable(observable => {
      this.observable = observable;
    });
  }

  showFailAlert() {
    this.type = 'fail';
    this.isShow = true;
  }
  showSuccessAlert() {
    this.type = 'success';
    this.isShow = true;
  }
  close() {
    this.type = null;
    this.isShow = false;
    this.observable.next();
  }
  get classes() {
    const cssClasses = {};
    switch (this.type) {
      case 'fail':
        cssClasses['alert-danger'] = true;
        break;
      case 'success':
        cssClasses['alert-success'] = true;
        break;
    }
    if (this.isShow) {
      cssClasses['show'] = true;
    }
    return cssClasses;
  }
}
