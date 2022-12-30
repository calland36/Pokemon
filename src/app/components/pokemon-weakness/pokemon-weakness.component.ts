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
  Dark!: boolean;

  singleCall: boolean= true;
  singleCallType: boolean= true;

  FireValue: number=1 ;
  WaterValue: number=1 ;
  FlyingValue: number=1 ;
  GrassValue: number=1 ;
  GroundValue: number=1 ;
  PoisonValue: number=1 ;
  BugValue: number=1 ;
  NormalValue: number=1 ;
  FairyValue: number=1 ;
  FightingValue: number=1 ;
  RockValue: number=1 ;
  SteelValue: number=1 ;
  IceValue: number=1 ;
  GhostValue: number=1 ;
  PsychicValue: number=1 ;
  ElectricValue: number=1 ;
  DragonValue: number=1 ;
  DarkValue: number=1 ;
  

  constructor() { }

  ngOnInit(): void {}

  setWeakness(){
    if (this.singleCall){
    //console.log("Hit set Weakness 1 time");

    if(this.pokimanx.type.includes('Fire')){
      this.FireValue= this.FireValue * 0.5;
      this.WaterValue=this.WaterValue * 2;
      this.GrassValue= this.GrassValue * 0.5;
      this.IceValue = this.IceValue * 0.5;
      this.RockValue= this.RockValue * 2;
      this.BugValue= this.BugValue * 0.5;
      this.GroundValue= this.GroundValue * 2;
      this.SteelValue= this.SteelValue * 0.5;
      this.FairyValue= this.FairyValue * 0.5;
    }
    if(this.pokimanx.type.includes('Water')){
      this.FireValue= this.FireValue * 0.5;
      this.WaterValue= this.WaterValue * 0.5;
      this.ElectricValue= this.ElectricValue * 2;
      this.GrassValue= this.GrassValue * 2;
      this.IceValue= this.IceValue * 0.5;
      this.SteelValue= this.SteelValue * 0.5;

    }
    if(this.pokimanx.type.includes('Flying')){
      this.ElectricValue= this.ElectricValue * 2;
      this.GrassValue= this.GrassValue * 0.5;
      this.IceValue= this.IceValue * 2;
      this.FightingValue= this.FightingValue * 1.5;
      this.GroundValue= 0;
      this.BugValue= this.BugValue * 0.5;
      this.RockValue= this.RockValue * 2;

    }
    if(this.pokimanx.type.includes('Grass')){
      this.FireValue= this.FireValue * 2;
      this.WaterValue= this.WaterValue * 0.5;
      this.ElectricValue= this.ElectricValue * 0.5;
      this.GrassValue= this.GrassValue * 0.5;
      this.IceValue= this.IceValue * 2;
      this.PoisonValue= this.PoisonValue * 2;
      this.GroundValue= this.GroundValue * 0.5;
      this.FlyingValue= this.FlyingValue * 2;

    }
    if(this.pokimanx.type.includes('Ground')){
      this.WaterValue= this.WaterValue * 2;
      this.ElectricValue= this.ElectricValue * 0;
      this.GrassValue= this.GrassValue * 2;
      this.IceValue= this.IceValue * 2;
      this.PoisonValue= this.PoisonValue *0.5;
      this.RockValue= this.RockValue * 0.5;

    }
    if(this.pokimanx.type.includes('Poison')){
      this.GrassValue= this.GrassValue * 0.5;
      this.PoisonValue= this.PoisonValue * 0.5;
      this.FightingValue= this.FightingValue * 0.5;
      this.GroundValue= this.GroundValue * 2;
      this.PsychicValue= this.PsychicValue * 2;
      this.BugValue= this.BugValue * 0.5;
      this.RockValue= this.RockValue * 0.5;
      this.DarkValue= this.DarkValue * 0.5;
      this.FairyValue= this.FairyValue * 2;
      

    }
    if(this.pokimanx.type.includes('Bug')){
      this.FireValue= this.FireValue * 2;
      this.GrassValue= this.GrassValue * 0.5;
      this.FightingValue= this.FightingValue * 0.5;
      this.GroundValue= this.GroundValue * 0.5;
      this.FlyingValue= this.FlyingValue * 2;
      this.RockValue= this.RockValue * 2;

    }
    if(this.pokimanx.type.includes('Normal')){
      this.FightingValue= this.FightingValue * 2;
      this.GhostValue= 0;

    }
    if(this.pokimanx.type.includes('Fairy')){
      this.FightingValue= this.FightingValue * 0.5;
      this.PoisonValue= this.PoisonValue * 2;
      this.BugValue= this.BugValue * 0.5;
      this.DragonValue= this.DragonValue * 0;
      this.DarkValue= this.DarkValue * 0.5;
      this.SteelValue= this.SteelValue * 2;

    }
    if(this.pokimanx.type.includes('Fighting')){
    this.FlyingValue= this.FlyingValue * 2;
    this.PsychicValue= this.PsychicValue * 2;
    this.BugValue= this.BugValue * 0.5;
    this.RockValue= this.RockValue * 0.5;
    this.DarkValue= this.DarkValue * 0.5;
    this.FairyValue= this.FairyValue * 2;

    }
    if(this.pokimanx.type.includes('Rock')){
      this.NormalValue= this.NormalValue * 0.5;
      this.FireValue= this.FireValue *  0.5;
      this.WaterValue= this.WaterValue * 2;
      this.GrassValue= this.GrassValue * 2;
      this.FightingValue= this.FightingValue * 2;
      this.PoisonValue= this.PoisonValue * 0.5;
      this.GroundValue= this.GroundValue * 2;
      this.FlyingValue= this.FlyingValue * 0.5;
      this.SteelValue= this.SteelValue * 2;

    }
    if(this.pokimanx.type.includes('Steel')){
      this.NormalValue= this.NormalValue * 0.5;
      this.FireValue= this.FireValue * 2;
      this.GrassValue= this.GrassValue * 0.5;
      this.IceValue= this.IceValue * 0.5;
      this.FightingValue= this.FightingValue * 2;
      this.PoisonValue= this.PoisonValue * 0;
      this.GroundValue= this.GroundValue * 2;
      this.FlyingValue= this.FlyingValue * 0.5;
      this.PsychicValue= this.PsychicValue * 0.5;
      this.BugValue= this.BugValue * 0.5;
      this.RockValue= this.RockValue * 0.5;
      this.DragonValue= this.DragonValue * 0.5;
      this.SteelValue= this.SteelValue * 0.5;
      this.FairyValue= this.FairyValue * 0.5;

    }
    if(this.pokimanx.type.includes('Ice')){
      this.FireValue= this.FireValue * 2;
      this.IceValue= this.IceValue * 0.5;
      this.FightingValue= this.FightingValue * 2;
      this.RockValue= this.RockValue * 2;
      this.SteelValue= this.SteelValue * 2;
    }
    if(this.pokimanx.type.includes('Ghost')){
      this.NormalValue= this.NormalValue * 0;
      this.FightingValue= this.FightingValue * 0;
      this.PoisonValue= this.PoisonValue * 0.5;
      this.BugValue= this.BugValue * 0.5;
      this.GhostValue= this.GhostValue * 2;
      this.DarkValue= this.DarkValue * 2;

    }
    if(this.pokimanx.type.includes('Psychic')){
      this.FightingValue= this.FightingValue * 0.5;
      this.PsychicValue= this.PsychicValue * 0.5;
      this.BugValue= this.BugValue * 2;
      this.GhostValue= this.GhostValue * 2;
      this.DarkValue= this.DarkValue * 2;

    }
    if(this.pokimanx.type.includes('Electric')){
      this.ElectricValue= this.ElectricValue * 0.5;
      this.GroundValue= this.GroundValue * 2;
      this.FlyingValue= this.FlyingValue * 0.5;
      this.SteelValue= this.SteelValue * 0.5;

    }
    if(this.pokimanx.type.includes('Dragon')){
      this.FireValue= this.FireValue * 0.5;
      this.WaterValue= this.WaterValue * 0.5;
      this.ElectricValue= this.ElectricValue * 0.5;
      this.GrassValue= this.GrassValue * 0.5;
      this.IceValue= this.IceValue * 2;
      this.DragonValue= this.DragonValue * 2;
      this.FairyValue= this.FairyValue * 2;

    }
    if(this.pokimanx.type.includes('Dark')){
      this.FightingValue= this.FightingValue * 2;
      this.PsychicValue= this.PsychicValue * 0;
      this.BugValue= this.BugValue * 2;
      this.GhostValue= this.GhostValue * 0.5;
      this.DarkValue= this.DarkValue * 0.5;
      this.FairyValue= this.FairyValue * 2;

    }

  
  }
  this.singleCall=false;
  }

  setTypess(){
    if (this.singleCallType){
      //console.log("Hit set Weakness 1 time");
    //console.log("Hit set type 1 time = "+ this.pokimanx.name);

  if(this.FireValue>= 1.5 ){
      this.Fire = true;
    }
  if(this.WaterValue>= 1.5 ){ 
      this.Water = true;
      }
  if(this.FlyingValue>= 1.5 ){ 
  this.Flying = true;
    }
  if(this.GrassValue>= 1.5 ){ 
    this.Grass = true;
    }
  if(this.GroundValue>= 1.5 ){ 
      this.Ground = true;
    }
  if(this.PoisonValue>= 1.5 ){ 
      this.Poison = true;
    }
  if(this.BugValue>= 1.5 ){
     this.Bug = true;
    }
  if(this.NormalValue>= 1.5 ){ 
     this.Normal = true;
    }
  if(this.FairyValue>= 1.5 ){
     this.Fairy = true;
    }
  if(this.FightingValue>= 1.5 ){ 
    this.Fighting=true;
  }
  if(this.RockValue>= 1.5 ){
    this.Rock=true;
  }
  if(this.SteelValue>= 1.5 ){ 
    this.Steel= true;
  }
  if(this.IceValue>= 1.5 ){ 
    this.Ice= true;
  } 
  if(this.GhostValue>= 1.5 ){
    this.Ghost=true;
  } 
  if(this.PsychicValue>= 1.5 ){ 
    this.Psychic=true;
  } 
  if(this.ElectricValue>= 1.5 ){ 
    this.Electric=true;
  } 
  if(this.DragonValue>= 1.5 ){
    this.Dragon=true;
  } 
  if(this.DarkValue>= 1.5 ){ 
    this.Dark=true;
  } 
}
this.singleCallType = false;




    //    if(this.pokimanx.weakness.includes('Fire')){
    //   this.Fire= true;
    // }
    // if(this.pokimanx.weakness.includes('Water')){
    //   this.Water= true;
    // }
    // if(this.pokimanx.weakness.includes('Flying')){
    //   this.Flying= true;
    // }
    // if(this.pokimanx.weakness.includes('Grass')){
    //   this.Grass= true;
    // }
    // if(this.pokimanx.weakness.includes('Ground')){
    //   this.Ground= true;
    // }
    // if(this.pokimanx.weakness.includes('Poison')){
    //   this.Poison= true;
    // }
    // if(this.pokimanx.weakness.includes('Bug')){
    //   this.Bug= true;
    // }
    // if(this.pokimanx.weakness.includes('Normal')){
    //   this.Normal= true;
    // }
    // if(this.pokimanx.weakness.includes('Fairy')){
    //   this.Fairy= true;
    // }
    // if(this.pokimanx.weakness.includes('Fighting')){
    //   this.Fighting= true;
    // }
    // if(this.pokimanx.weakness.includes('Rock')){
    //   this.Rock= true;
    // }
    // if(this.pokimanx.weakness.includes('Steel')){
    //   this.Steel= true;
    // }
    // if(this.pokimanx.weakness.includes('Ice')){
    //   this.Ice= true;
    // }
    // if(this.pokimanx.weakness.includes('Ghost')){
    //   this.Ghost= true;
    // }
    // if(this.pokimanx.weakness.includes('Psychic')){
    //   this.Psychic= true;
    // }
    // if(this.pokimanx.weakness.includes('Electric')){
    //   this.Electric= true;
    // }
    // if(this.pokimanx.weakness.includes('Dragon')){
    //   this.Dragon= true;
    // }
    // if(this.pokimanx.weakness.includes('Dark')){
    //   this.Dark= true;
    // }
 
}

}
