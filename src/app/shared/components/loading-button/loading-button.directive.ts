import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: 'button.loading'
})
export class LoadingButtonDirective {
  constructor(private elementRef: ElementRef) {}

  loading(isLoading: boolean) {
    if (isLoading) {
      const spinnerEl = document.createElement('i');
      spinnerEl.className = 'fa fa-spinner fa-spin';
      this.elementRef.nativeElement.append(spinnerEl);
      this.elementRef.nativeElement.disabled = true;
    } else {
      this.elementRef.nativeElement.querySelector('i').remove();
      this.elementRef.nativeElement.disabled = null;
    }
  }
}
