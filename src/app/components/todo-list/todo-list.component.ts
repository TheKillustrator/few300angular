import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoItem } from '../../models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectInboxTodoList } from 'src/app/reducers';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items$: Observable<TodoItem[]>;

  constructor(
    private dialogRef: MatDialogRef<TodoListComponent>,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectInboxTodoList),
      tap(data => console.log(data))
    );
  }

  drop(evt: any): void {
  }

  done(): void {
    this.dialogRef.close();
  }
}
