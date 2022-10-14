import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PokemonCard } from '../../PokemonCard';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokimanx!: PokemonCard;
  faTimes = faTimes;
  returnType!: String;
  Fire: boolean =false;
  Water: boolean=false;
  Flying: boolean=false;
  Grass: boolean=false;
  Ground: boolean=false;
  Poison: boolean=false;


  constructor() {}

  ngOnInit(): void {
  }

  getType(pokemon: PokemonCard){
    //console.log("Checking type "+ pokemon.type);
    if(pokemon.type.includes('Fire')){
      return true;
    }
    return false;
  }

  getMet(){    
    this.returnType = "";
//    this.returnType = this.returnType + "Hello World";
//    this.returnType = this.returnType + "<h4>smallertext</h4>";
      return this.returnType;
  }
  
  setTypes(){
    console.log("We are setting types= "+ this.pokimanx.type);
    if(this.pokimanx.type.includes('Fire')){
      console.log("Hit this Fire= "+ this.pokimanx.type);
      this.Fire= true;
    }
    if(this.pokimanx.type.includes('Water')){
      console.log("Hit this Water= "+ this.pokimanx.type);
      this.Water= true;
    }
    if(this.pokimanx.type.includes('Flying')){
      this.Flying= true;
    }
    if(this.pokimanx.type.includes('Grass')){
      this.Grass= true;
    }
    if(this.pokimanx.type.includes('Ground')){
      this.Ground= true;
    }
    if(this.pokimanx.type.includes('Poison')){
      this.Poison= true;
    }
  }
    
}
