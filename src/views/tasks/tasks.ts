import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { QueryParams } from '@ngrx/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from 'src/core/task';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  directives: [
    TaskForm,
    TaskList
  ],
  selector: 'tasks',
  template: `
    <div class="g-row">
      <div class="g-col">
        <task-form (createTask)="taskService.createTask($event)"></task-form>
      </div>

      <div class="g-col">
        <task-list
          [filter]="filter | async"
          [taskItems]="taskService.taskItems$"
          (remove)="taskService.removeTask($event)"
          (update)="taskService.updateTask($event.task, $event.changes)"></task-list>
      </div>
    </div>
  `
})

export class Tasks {
  filter: Observable<any>;

  constructor(public params: QueryParams, public taskService: TaskService) {
    this.filter = params.pluck('filter');
  }
}
