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
  @Input() apiTypeArray!: any[];

  
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

  pokeType1!: string | " ";
  pokeType2!: string | " ";


  constructor() { }

  ngOnInit(): void {
  }

  setTypes(){

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

  setTypesApi(){
    
    if(this.apiTypeArray[0]){
      this.pokeType1 = this.apiTypeArray[0].type.name;
    }
    if(this.apiTypeArray[1]){
       this.pokeType2 = this.apiTypeArray[1].type.name;
    }
    else{
      this.pokeType2 = " ";
    }
    //console.log("singleCall is= "+ this.singleCall);
    if( this.singleCall){
      if(this.pokeType1.includes('fire')|| this.pokeType2.includes('fire')){
        this.Fire= true;
      }
      if(this.pokeType1.includes('water')|| this.pokeType2.includes('water')){
        this.Water= true;
      }
      if(this.pokeType1.includes('flying')|| this.pokeType2.includes('flying')){
        this.Flying= true;
      }
      if(this.pokeType1.includes('grass')|| this.pokeType2.includes('grass')){
        this.Grass= true;
      }
      if(this.pokeType1.includes('ground')|| this.pokeType2.includes('ground')){
        this.Ground= true;
      }
      if(this.pokeType1.includes('poison')|| this.pokeType2.includes('poison')){
        this.Poison= true;
      }
      if(this.pokeType1.includes('bug')|| this.pokeType2.includes('bug')){
        this.Bug= true;
      }
      if(this.pokeType1.includes('normal')|| this.pokeType2.includes('normal')){
        this.Normal= true;
      }
      if(this.pokeType1.includes('fairy')|| this.pokeType2.includes('fairy')){
        this.Fairy= true;
      }
      if(this.pokeType1.includes('fighting')|| this.pokeType2.includes('fighting')){
        this.Fighting= true;
      }
      if(this.pokeType1.includes('rock')|| this.pokeType2.includes('rock')){
        this.Rock= true;
      }
      if(this.pokeType1.includes('steel')|| this.pokeType2.includes('steel')){
        this.Steel= true;
      }
      if(this.pokeType1.includes('ice')|| this.pokeType2.includes('ice')){
        this.Ice= true;
      }
      if(this.pokeType1.includes('ghost')|| this.pokeType2.includes('ghost')){
        this.Ghost= true;
      }
      if(this.pokeType1.includes('psychic')|| this.pokeType2.includes('psychic')){
        this.Psychic= true;
      }
      if(this.pokeType1.includes('electric')|| this.pokeType2.includes('electric')){
        this.Electric= true;
      }
      if(this.pokeType1.includes('dragon')|| this.pokeType2.includes('dragon')){
        this.Dragon= true;
      }
  }
  this.singleCall=false;
  }

}
