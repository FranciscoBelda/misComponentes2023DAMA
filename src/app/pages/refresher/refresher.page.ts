import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  skeleton= false;
  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event: any){
    setTimeout(() => {
      this.items.push(...Array(20));
      this.skeleton = true;
      event.target.complete();
    },1500);
    this.skeleton = false;
  }

}
