import { Component, OnInit, Input } from '@angular/core';
import { single } from 'rxjs';
import { PokemonCard } from 'src/app/PokemonCard';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {
  @Input() pokimanx!: PokemonCard;
  
  returnType!: String;
  Fire: boolean =false;
  Water: boolean=false;
  Flying: boolean=false;
  Grass: boolean=false;
  Ground: boolean=false;
  Poison: boolean=false;
  Bug: boolean=false;
  Normal: boolean=false;
  Fairy: boolean=false;
  Fighting: boolean=false;
  Rock: boolean=false;
  Steel: boolean=false;
  Ice: boolean=false;
  Ghost: boolean=false;
  Psychic: boolean=false;
  Electric: boolean=false;
  Dragon: boolean=false;
  singleCall: boolean= true;


  constructor() { }

  ngOnInit(): void {
  }

  setTypes(){
    console.log("singleCall is= "+ this.singleCall);
    if( this.singleCall){
    if(this.pokimanx.type.includes('Fire')){
      this.Fire= true;
    }
    if(this.pokimanx.type.includes('Water')){
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
    if(this.pokimanx.type.includes('Bug')){
      this.Bug= true;
    }
    if(this.pokimanx.type.includes('Normal')){
      this.Normal= true;
    }
    if(this.pokimanx.type.includes('Fairy')){
      this.Fairy= true;
    }
    if(this.pokimanx.type.includes('Fighting')){
      this.Fighting= true;
    }
    if(this.pokimanx.type.includes('Rock')){
      this.Rock= true;
    }
    if(this.pokimanx.type.includes('Steel')){
      this.Steel= true;
    }
    if(this.pokimanx.type.includes('Ice')){
      this.Ice= true;
    }
    if(this.pokimanx.type.includes('Ghost')){
      this.Ghost= true;
    }
    if(this.pokimanx.type.includes('Psychic')){
      this.Psychic= true;
    }
    if(this.pokimanx.type.includes('Electric')){
      this.Electric= true;
    }
    if(this.pokimanx.type.includes('Dragon')){
      this.Dragon= true;
    }
  }
  this.singleCall=false;
  }

}
