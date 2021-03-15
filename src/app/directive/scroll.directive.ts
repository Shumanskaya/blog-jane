import { Directive, Input, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Input() block;

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('click') onClick() {
    const element = document.querySelector(`#${this.block}`);
    const elementPos = element.getBoundingClientRect();
    const posY = elementPos.top + pageYOffset - 100;
    console.log(posY);
    window.scrollTo({
      top: posY,
      left: 0,
      behavior: 'smooth'
    });
  }

}
