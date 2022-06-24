import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, DoCheck {
  restCallInitated = true;
  movies: any = [];
  @Input() searchQuery: string = '';
  previousQuery: string = '';

  constructor(
    private movieService: MovieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  ngDoCheck(): void {
    if(this.searchQuery.trim()!='' && this.previousQuery!=this.searchQuery){
      this.previousQuery = this.searchQuery;
      this.searchMovies();
    }else if(this.searchQuery.trim()=='' && this.previousQuery!=''){
      this.previousQuery = '';
      this.getTopRatedMovies();
    }
  }

  getTopRatedMovies(){
    this.movieService.getTopRatedMovies().subscribe((data: any) => {
      this.movies = data.results;
      this.restCallInitated = false;
    });
  }

  searchMovies(){
    this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.movies = data.results;
      this.restCallInitated = false;
    });
  }
}
