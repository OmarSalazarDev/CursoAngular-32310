import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef) {
      renderer.setStyle(elementRef.nativeElement, 'background-color', 'red');
      renderer.setStyle(elementRef.nativeElement, 'color', 'white');
    }

}
