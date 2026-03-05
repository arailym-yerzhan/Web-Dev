import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from './movie.model';
import { MovieCardComponent } from './movie-card/movie-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'My Movie List';

  movies: Movie[] = [
    { id: 1, title: 'Mulan', year: 2010, isWatched: true, votes: 0 },
    { id: 2, title: 'Interstellar', year: 2014, isWatched: true, votes: 0 },
    { id: 3, title: 'Avatar', year: 2009, isWatched: false, votes: 0 },
    { id: 4, title: 'The Batman', year: 2022, isWatched: false, votes: 0 },
    { id: 5, title: 'Joker', year: 2019, isWatched: true, votes: 0 }
  ];

  removeMovie(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

}
