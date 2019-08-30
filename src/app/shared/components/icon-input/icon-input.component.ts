import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss']
})
export class IconInputComponent implements OnInit {
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
