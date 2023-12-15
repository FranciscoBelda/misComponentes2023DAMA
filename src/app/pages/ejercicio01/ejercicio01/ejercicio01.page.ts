import { Component, OnInit } from '@angular/core';
import {Post} from "../../../common/Post";
import {DataService} from "../../../services/data.service";
import {PopoverController} from "@ionic/angular";
import {Ejercicio01PopoverPage} from "../ejercicio01-popover/ejercicio01-popover.page";

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {
  posts: Post[] = [];
  skeleton = true;
  constructor(private dataService: DataService,
              private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    this.dataService.loadPosts().subscribe(
      {
        next: value => {
          this.posts = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Done');
          this.loadSkeleton();
        }
      }
    )
  }

  loadSkeleton(event?: any) {
    this.skeleton = true;
    setTimeout(() => {
      this.skeleton = false;
      if(event) event.target.complete();
    },1000);
  }

  async abrirPopover(post: Post) {
    const popover = await this.popoverCtrl.create(
      {
        component: Ejercicio01PopoverPage,
        componentProps: {
          'post': post
        }
      }
    );
    await popover.present();
  }
}
