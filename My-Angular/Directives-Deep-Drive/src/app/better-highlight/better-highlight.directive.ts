import { Directive, ElementRef ,Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') hilightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef: ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.hilightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
