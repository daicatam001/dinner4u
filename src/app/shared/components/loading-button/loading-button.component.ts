import {
  Component,
  ContentChild,
  AfterContentInit,
  forwardRef,
  ElementRef,
  Input,
  HostBinding
} from '@angular/core';
import { LoadingButtonDirective } from './loading-button.directive';

@Component({
  selector: 'loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements AfterContentInit {
  @ContentChild(LoadingButtonDirective, { static: false })
  button: LoadingButtonDirective;
  @HostBinding('class.fix-position') @Input() isFixPositionIcon;
  constructor() {}
  ngAfterContentInit() {
    console.log(this.isFixPositionIcon);
    if (!this.button) {
      throw new Error('Do not find a button');
    }
  }

  loading(isLoading) {
    this.button.loading(isLoading);
  }
}
