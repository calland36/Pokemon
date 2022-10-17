import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private showAddPokemon: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    console.log("toggling add task "+this.showAddTask );
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleAddPokemon(): void{
    console.log("toggling add pokemon "+this.showAddPokemon );
    this.showAddPokemon = !this.showAddPokemon;
    this.subject.next(this.showAddPokemon);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
