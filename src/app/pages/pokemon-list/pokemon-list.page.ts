import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage {
  pokemon:any;
  searchPokemon : string = '';
  errorMessage : any;
  constructor(private pokemonService: PokemonService) {}
   searchPokemons(){
    if(this.searchPokemon.trim() === ''){
      this.errorMessage = 'Por favor , ingrese el nombre del Pokéon a buscar';
      return;
    }
    this.pokemonService.getPokemon(this.searchPokemon.toLowerCase()).subscribe(
      (response) => {
        this.pokemon = response;
        this.errorMessage = '';
      },
      (error) => {
        this.pokemon = null;
        this.errorMessage = 'Pokémon not found. Please try another name.';
      }
    );
    }
  }


