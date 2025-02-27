import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {UsersService} from "../users.service";

export const resolveUserName: ResolveFn<string> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const usersService = inject(UsersService);
    const user = usersService.users
      .find(u => u.id === route.paramMap.get("userId"));
    return user?.name || "";
  };

export const resolveTitle: ResolveFn<string> =
  (route, state) => {
    return resolveUserName(route, state) + '\'s Tasks';
  }
