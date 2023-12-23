import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay } from "rxjs";
import { environment } from "../../environments/environment.development";
import { IEvent, IFormFilter } from "../interfaces/event.interface";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private _http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this._http
      .get<IEvent[]>(`${environment.api_url}/events`)
      .pipe(delay(1000));
  }

  getEventsFilters(filters: IFormFilter): Observable<IEvent[]> {
    return this._http
      .get<IEvent[]>(
        `${environment.api_url}/events?${this.buildParams(filters)}`
      )
      .pipe(delay(1000));
  }

  private buildParams(filters: IFormFilter): string {
    const queryParams: string = Object.keys(filters)
      .filter((key: string) => filters[key] !== "")
      .map((key: string) => `${key}=${filters[key]}`)
      .join("&");
    return queryParams;
  }
}
