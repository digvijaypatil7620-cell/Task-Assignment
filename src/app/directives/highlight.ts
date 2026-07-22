import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true
})
export class Highlight {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this.element.nativeElement.id == 'submitBtn'){
       this.element.nativeElement.style.backgroundColor='black';
    this.element.nativeElement.style.color ='red';
    }else{
       this.element.nativeElement.style.backgroundColor='yellow';
    this.element.nativeElement.style.color ='red';
    }
   
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.backgroundColor='';
    this.element.nativeElement.style.color='';
  }

}
