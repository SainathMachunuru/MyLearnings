import {Directive, ElementRef} from '@angular/core'
@Directive({
    selector:'[appBasicDirective]'
})
export  class BasichighlightDirective{
    constructor(private elementRef:ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}