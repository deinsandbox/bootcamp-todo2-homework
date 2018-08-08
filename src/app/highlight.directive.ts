import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter')
  onmouseenter() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  onmouseleave() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

  constructor(private elementRef: ElementRef) { }

}
