import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[basicTextColor]'
})
export class BasicTextColor {
    constructor(private elementRef: ElementRef) {
        elementRef.nativeElement.style.color = 'black';
    }
}