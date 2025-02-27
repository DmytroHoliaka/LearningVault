import {inject, Injectable, signal} from "@angular/core";
import {Task, TaskStatus} from "./task.model";
import {LoggingService} from "../logging.service";

interface TaskData {
  title: string;
  description: string;
}

// 1
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private loggingService = inject(LoggingService);
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: TaskData) {
    const newTask: Task = {
      id: Math.random().toString(),
      status: 'OPEN',
      ...taskData,
    }

    this.tasks.update(oldTasks => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK WITH TITLE ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? {...task, status: newStatus} : task));
    this.loggingService.log('CHANGE TASK STATUS TO ' + newStatus);
  }
}
