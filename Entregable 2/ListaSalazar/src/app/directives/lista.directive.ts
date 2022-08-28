import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLista]'
})
export class ListaDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef) {
      renderer.setStyle(elementRef.nativeElement, 'font-size', '12px');
    }

}
