import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  counter = 0;
  @Input() highlight;
  @Input() txtcolor;
  @HostListener('mouseenter') onMouseE() {
    this.hover(this.txtcolor, this.highlight, '1px 1px 3px');
  }
  @HostListener('mouseleave') onmousel() {
    this.hover('gray', 'whitesmoke', '0px 0px 3px');
  }
  @HostListener('click') onClick() {
    this.countClick();
  }
  constructor(private el: ElementRef) {
    this.hover('gray', 'whitesmoke', '0px 0px 3px');

  }
  hover(color, bgcolor, bshadow) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = bgcolor;
    this.el.nativeElement.style.boxShadow = bshadow;
  }
  countClick() {
    this.counter++;
    console.log(this.counter);
  }
}
