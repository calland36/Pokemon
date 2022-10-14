import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { PokemonCard } from '../../PokemonCard';
import { PokemonService } from '../../services/pokemon.service';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  pokemonCards: PokemonCard[] = [];
  searchText!: string;
  holdst!: string;

  constructor(private taskService: TaskService, private pokemonService: PokemonService) {}

  ngOnInit(): void {

    console.log("hit 1");
    this.pokemonService.getPokemonCards().subscribe((pokemonCards) => (this.pokemonCards = pokemonCards));
    console.log("This is 'pokemoncards' "+ this.pokemonCards);

    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    this.holdst=this.tasks.toString();
    console.log("This is 'tasks' "+ this.holdst);

    console.log("hit 3");

  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  addPokemonCard(pokemonCard: PokemonCard){
    this.pokemonService.addPokemonCard(pokemonCard).subscribe((pokemonCard) => (this.pokemonCards.push(pokemonCard)));
  }
}
