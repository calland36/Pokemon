import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonCard } from '../PokemonCard';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://localhost:5000/pokemonCard';

  constructor(private http: HttpClient) {}


  getPokemonCards(): Observable<PokemonCard[]> {
    console.log("hit get pokemonCards");
    return this.http.get<PokemonCard[]>(this.apiUrl);
  }

  deleteTask(pokemonCard: PokemonCard): Observable<PokemonCard> {
    const url = `${this.apiUrl}/${pokemonCard.id}`;
    return this.http.delete<PokemonCard>(url);
  }

  updateTaskReminder(pokemonCard: PokemonCard): Observable<PokemonCard> {
    const url = `${this.apiUrl}/${pokemonCard.id}`;
    return this.http.put<PokemonCard>(url, pokemonCard, httpOptions);
  }
  
  addPokemonCard(pokemonCard: PokemonCard): Observable<PokemonCard> {
    return this.http.post<PokemonCard>(this.apiUrl, pokemonCard, httpOptions);
  }
}
