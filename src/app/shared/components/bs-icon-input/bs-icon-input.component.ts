import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-icon-input',
  templateUrl: './bs-icon-input.component.html',
  styleUrls: ['./bs-icon-input.component.scss']
})
export class BsIconInputComponent implements OnInit {
  @Input() icon;
  constructor() {}

  ngOnInit() {}

  get classes() {
    const iconClasses = {};
    if (this.icon) {
      iconClasses['fa'] = true;
      iconClasses['fa-fw'] = true;
      iconClasses['fa-' + this.icon] = true;
    }
    return iconClasses;
  }
}
