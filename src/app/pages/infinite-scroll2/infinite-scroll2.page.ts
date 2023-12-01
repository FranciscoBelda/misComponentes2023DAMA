import { Component, OnInit } from '@angular/core';
import {Pelicula} from "../../common/peliculas";
import {environment} from "../../../environments/environment";
import {DataService} from "../../services/data.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-infinite-scroll2',
  templateUrl: './infinite-scroll2.page.html',
  styleUrls: ['./infinite-scroll2.page.scss'],
})
export class InfiniteScroll2Page implements OnInit {
  movies: Pelicula[] = [];
  currentPage = 1;
  imageUrl = environment.images;
  constructor(private dataService: DataService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  private async loadMovies(event?: any) {
    const loading =
      await this.loadingCtrl.create(
      {
        message: 'Loading...',
        spinner: 'bubbles'
      }
    );
    await loading.present();

    this.dataService.loadMovies(this.currentPage).subscribe(
      {
        next: value => {
          loading.dismiss();
          this.movies.push(...value.results);
          event?.target.complete();
          if(event){
            event.target.disabled = value.total_pages === this.currentPage;
          }
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    );
  }

  loadMore(event: any) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
