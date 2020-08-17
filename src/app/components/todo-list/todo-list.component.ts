import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[] = [
    { id: '1', name: 'Clean Garage', completed: true },
    { id: '2', name: 'Wash Deck', completed: false },
    { id: '3', name: 'Fix Steps', project: 'Home', completed: false, dueDate: '2020-08-23' }
  ];
  constructor(private dialogRef: MatDialogRef<TodoListComponent>) { }

  ngOnInit(): void {
  }

  drop(evt: any): void {
  }

  done(): void {
    this.dialogRef.close();
  }
}
