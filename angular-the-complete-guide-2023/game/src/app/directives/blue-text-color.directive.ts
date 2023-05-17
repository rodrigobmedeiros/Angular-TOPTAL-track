import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlueTextColor]'
})
export class BlueTextColorDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

}
