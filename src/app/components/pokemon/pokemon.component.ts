import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PokemonCard } from '../../PokemonCard';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonCards: PokemonCard[] = [];
  searchText!: string;

  @Input() pokemon!: PokemonCard;
  faTimes = faTimes;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    console.log("hit ngoninit for pokemon.componeonts");
    this.pokemonService.getPokemonCards().subscribe((pokemonCards) => (this.pokemonCards = pokemonCards));

  }

  addPokemonCard(pokemonCard: PokemonCard){
    this.pokemonService.addPokemonCard(pokemonCard).subscribe((pokemonCard) => (this.pokemonCards.push(pokemonCard)));
  }

}
