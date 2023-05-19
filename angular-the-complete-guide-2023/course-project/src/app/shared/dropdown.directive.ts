import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  public changeDropdownStatus(): void {

    const element = this.elementRef.nativeElement;
    this.isOpen = !this.isOpen;

    this.isOpen ? element.classList.add('open') : element.classList.remove('open');
  }
}
