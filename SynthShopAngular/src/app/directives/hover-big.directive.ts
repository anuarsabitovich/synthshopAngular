import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverBig]',
  standalone: true,
})
export class HoverBigDirective {
  @Input('appHoverBig') scale: number = 1.1;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setScale(this.scale);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setScale(1);
  }

  private setScale(scale: number) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scale(${scale})`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s ease-in-out'
    );
  }
}
