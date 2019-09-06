import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button.loading'
})
export class LoadingButtonDirective {
  constructor(private elementRef: ElementRef) {}

  loading(isLoading: boolean) {
    if (isLoading) {
      const spanEl = document.createElement('span');
      spanEl.className = 'icon';
      const spinnerEl = document.createElement('i');
      spinnerEl.className = 'fa fa-spinner fa-spin';
      spanEl.append(spinnerEl);
      this.elementRef.nativeElement.append(spanEl);
      this.elementRef.nativeElement.disabled = true;
    } else {
      this.elementRef.nativeElement.querySelector('span.icon').remove();
      this.elementRef.nativeElement.disabled = null;
    }
  }
}
