import {Component, computed, signal} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

type User = {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId: string | undefined;

  get selectedUser(): User | undefined {
    return this.users.find((u: User): boolean => u.id == this.selectedUserId);
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }

  protected readonly DUMMY_USERS = DUMMY_USERS;
}
