import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBlueTextColor]'
})
export class BlueTextColorDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() mouseOverColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    this.backgroundColor = this.mouseOverColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
  }

}
