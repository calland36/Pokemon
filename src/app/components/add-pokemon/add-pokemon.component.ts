import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { PokemonCard } from '../../PokemonCard';
@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  @Output() onAddPokemonCard: EventEmitter<PokemonCard> = new EventEmitter();

  name!: string;
  type!: string;
  weakness!: string;
  image!: string;
  

  constructor() {
    
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
      return;
    }

    const newPokemonCard = {
      name: this.name,
      type: this.type,
      weakness: this.weakness,
      image: this.image,
    };

    this.onAddPokemonCard.emit(newPokemonCard);

    // this.text = '';
    // this.day = '';
    // this.reminder = false;
  }
}