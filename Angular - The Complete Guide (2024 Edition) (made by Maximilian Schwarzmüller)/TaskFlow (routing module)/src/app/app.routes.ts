import {CanMatch, CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment} from "@angular/router";
import {TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {routes as userRoutes} from './users/users.routes'
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {resolveTitle, resolveUserName} from "./users/user-tasks/user-tasks.resolvers";
import {inject, Injectable} from "@angular/core";

const dummyCanMatch: CanMatchFn =
  (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();

    if (shouldGetAccess < 0.5) {
      return true;
    }

    return new RedirectCommand(router.parseUrl('/unauthorized'));
  }

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No task selected here'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    // canMatch: [dummyCanMatch],
    children: userRoutes,
    data: {
      message: 'Hello!'
    },
    resolve: {

    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
