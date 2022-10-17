import { Component, OnInit, Input } from '@angular/core';
import { PokemonCard } from '../../PokemonCard';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-weakness',
  templateUrl: './pokemon-weakness.component.html',
  styleUrls: ['./pokemon-weakness.component.css']
})
export class PokemonWeaknessComponent implements OnInit {
  @Input() pokimanx!: PokemonCard;

  Fire!: boolean ;
  Water!: boolean;
  Flying!: boolean;
  Grass!: boolean;
  Ground!: boolean;
  Poison!: boolean;
  Bug!: boolean;
  Normal!: boolean;
  Fairy!: boolean;
  Fighting!: boolean;
  Rock!: boolean;
  Steel!: boolean;
  Ice!: boolean;
  Ghost!: boolean;
  Psychic!: boolean;
  Electric!: boolean;
  Dragon!: boolean;
  

  constructor() { }

  ngOnInit(): void {}

  setTypess(){
       if(this.pokimanx.weakness.includes('Fire')){
      this.Fire= true;
    }
    if(this.pokimanx.weakness.includes('Water')){
      this.Water= true;
    }
    if(this.pokimanx.weakness.includes('Flying')){
      this.Flying= true;
    }
    if(this.pokimanx.weakness.includes('Grass')){
      this.Grass= true;
    }
    if(this.pokimanx.weakness.includes('Ground')){
      this.Ground= true;
    }
    if(this.pokimanx.weakness.includes('Poison')){
      this.Poison= true;
    }
    if(this.pokimanx.weakness.includes('Bug')){
      this.Bug= true;
    }
    if(this.pokimanx.weakness.includes('Normal')){
      this.Normal= true;
    }
    if(this.pokimanx.weakness.includes('Fairy')){
      this.Fairy= true;
    }
    if(this.pokimanx.weakness.includes('Fighting')){
      this.Fighting= true;
    }
    if(this.pokimanx.weakness.includes('Rock')){
      this.Rock= true;
    }
    if(this.pokimanx.weakness.includes('Steel')){
      this.Steel= true;
    }
    if(this.pokimanx.weakness.includes('Ice')){
      this.Ice= true;
    }
    if(this.pokimanx.weakness.includes('Ghost')){
      this.Ghost= true;
    }
    if(this.pokimanx.weakness.includes('Psychic')){
      this.Psychic= true;
    }
    if(this.pokimanx.weakness.includes('Electric')){
      this.Electric= true;
    }
    if(this.pokimanx.weakness.includes('Dragon')){
      this.Dragon= true;
    }
  }

}
