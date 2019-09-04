import { Directive, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({ selector: '[showPassword]' })
export class ShowPasswordDirective {
  @Input() showPassword: boolean;
  constructor(private elementRef: ElementRef) {}

  @HostBinding('type') type() {
    console.log(this.showPassword);
    return this.showPassword ? 'text' : 'password';
  }
}
