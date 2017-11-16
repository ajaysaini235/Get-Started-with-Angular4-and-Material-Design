import { Directive ,Input,HostListener,Output,EventEmitter} from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {
  @Input() confirmMessage: string = 'Are you sure you want to do this?'
  @Output() onConfirm = new EventEmitter<boolean>()
  constructor() { }
  
  @HostListener('click',['$event'])
  confirmFirst() {
    const confirmed = window.confirm(this.confirmMessage);
    this.onConfirm.emit(confirmed);
  }
}
