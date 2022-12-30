import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { 

  }

  //Get POkemons for PokeApi

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  }

  //Get More Pokemons Data

  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
