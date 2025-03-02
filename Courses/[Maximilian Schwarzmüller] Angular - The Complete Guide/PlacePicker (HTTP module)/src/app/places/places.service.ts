import {inject, Injectable, signal} from '@angular/core';

import {Place} from './place.model';
import {catchError, EMPTY, map, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../shared/error.service";

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/places",
      "Something went wrong fetching the available places. Please try again later");
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/user-places",
      "Something went wrong fetching your favourite places. Please try again later")
      .pipe(
        tap({
          next: (userPlaces) => this.userPlaces.set(userPlaces),
        }))
  }

  addPlaceToUserPlaces(place: Place) {
    if (this.userPlaces().some(p => p.id === place.id)) {
      return EMPTY;
    }

    return this.httpClient.put<{ userPlaces: Place[] }>("http://localhost:3000/user-places", {
      placeId: place.id
    })
      .pipe(
        catchError(error => {
          this.errorService.showError("Failed to store selected place.");
          return throwError(() => new Error("Failed to store selected place."));
        }),
        map(resData => resData.userPlaces),
        tap(resPlaces => this.userPlaces.set(resPlaces))
      )
  }

  removeUserPlace(place: Place) {
    if (!this.userPlaces().some(p => p.id === place.id)) {
      return EMPTY;
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`)
      .pipe(
        catchError(error => {
          this.errorService.showError("Failed to delete selected favourite place.");
          return throwError(() => new Error("Failed to delete selected favourite place."));
        }),
        tap(() => this.userPlaces.update(oldPlaces => oldPlaces.filter(p => p.id !== place.id)))
      )
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ places: Place[] }>(url)
      .pipe(
        map(resData => resData.places),
        catchError(
          (error) => {
            console.log(error)
            return throwError(() => new Error(errorMessage));
          }),
      )
  }
}
