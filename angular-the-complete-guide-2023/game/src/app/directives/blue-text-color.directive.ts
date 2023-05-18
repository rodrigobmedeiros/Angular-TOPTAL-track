import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBlueTextColor]'
})
export class BlueTextColorDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    this.backgroundColor = "red";
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.backgroundColor = "transparent";
  }

}
