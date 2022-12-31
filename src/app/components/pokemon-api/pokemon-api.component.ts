import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})
export class PokemonApiComponent implements OnInit {
  @Input() pokemonApix!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
