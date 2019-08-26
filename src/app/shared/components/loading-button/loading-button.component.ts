import {
  Component,
  ContentChild,
  AfterContentInit,
  forwardRef,
  ElementRef
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
  constructor() {}
  ngAfterContentInit() {
    if (!this.button) {
      throw new Error('Do not find a button');
    }
  }

  loading(isLoading) {
    this.button.loading(isLoading);
  }
}
