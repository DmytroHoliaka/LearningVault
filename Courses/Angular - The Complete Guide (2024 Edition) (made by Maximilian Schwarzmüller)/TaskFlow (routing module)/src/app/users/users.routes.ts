import {TasksComponent} from "../tasks/tasks.component";
import {canLeaveEditPage, NewTaskComponent} from "../tasks/new-task/new-task.component";
import {Routes} from "@angular/router";
import {resolveUserTasks} from "../tasks/tasks.resolvers";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    }
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  }
];
