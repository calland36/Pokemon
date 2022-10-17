import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Pokemon';
  showAddTask!: boolean;
  showAddPokemon: boolean= false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddPokemon = value));
  }

  ngOnInit(): void {}

  toggleAddPokemon() {
    this.uiService.toggleAddPokemon();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
