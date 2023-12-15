import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../common/Post";

@Component({
  selector: 'app-ejercicio01-popover',
  templateUrl: './ejercicio01-popover.page.html',
  styleUrls: ['./ejercicio01-popover.page.scss'],
})
export class Ejercicio01PopoverPage implements OnInit {
  @Input() post!: Post;
  constructor() { }

  ngOnInit() {
    console.log(this.post);
  }

}
