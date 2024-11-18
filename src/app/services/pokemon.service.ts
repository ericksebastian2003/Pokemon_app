import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';


  constructor(private http : HttpClient) { }
  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
