import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {
  @ViewChild('listenerOut',{static: true}) listenerOut!: ElementRef;
  values: string[] = ["first","second","third"];
  option: string = '';
  constructor() { }

  ngOnInit() {
  }

  accordionGroupChange(event: any) {
    console.log(event);
    const nativeEl = this.listenerOut.nativeElement;
    if(!nativeEl){
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== event.detail.value);
    const selectedValue = event.detail.value;

    nativeEl.innerText =
      'Expanded: '+(selectedValue === undefined ? 'None':selectedValue)+'\n'+
      'Collapsed: '+collapsedItems.join(', ');
  }

  optionAccordion(event: any) {
    this.option = event.detail.value;
  }
}
