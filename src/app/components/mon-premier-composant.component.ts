import { Component } from '@angular/core';
import {  MoviesService, Movie } from '../service/movies.service';

@Component({
  selector: '.premierComposant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.css']
})
export class MonPremierComposantComponent {
criDeVictoire = "Hourra"
declare movies: Movie[];
constructor(private moviesService: MoviesService) {

  this.movies = this.moviesService.getAllMovies()
}


// movies = ['Forrest Gump', 'Alice au pys des merveilles','attaque des bananes martiennes']

//retourne banane en chaine de char
    getBanane(){

  return 'banane'

  }
}
