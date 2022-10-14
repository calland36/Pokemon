import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskx!: Task;
  @Output() onDeleteTask: EventEmitter<Task>= new EventEmitter();
  faTimes = faTimes;
  @Output() onToggleReminder: EventEmitter<Task>= new EventEmitter();
  
  //added for searching
  searchText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
    console.log(task);
  }

  onToggle(task: Task){
  this.onToggleReminder.emit(task);
  }

}
