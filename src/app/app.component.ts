import { Component } from "@angular/core";
import { IEvent, IFormFilter } from "./interfaces/event.interface";
import { SweetalertService } from "./services/sweetalert.service";
import { EventsService } from "./services/events.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  events: IEvent[] = [];
  categories: string[] = [];

  constructor(
    private _eventSvc: EventsService,
    private _saSvc: SweetalertService
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this._saSvc.showLoading();
    this._eventSvc.getEvents().subscribe((events: IEvent[]) => {
      this.events = events;
      this.loadCategories();
    });
  }

  loadCategories(): void {
    this.categories = [
      "Todos",
      ...new Set(this.events.map((event: IEvent) => event.category))
    ];
    this._saSvc.closeLoading();
  }

  search(filters: IFormFilter): void {
    this._saSvc.showLoading();
    this._eventSvc.getEventsFilters(filters).subscribe((events: IEvent[]) => {
      this.events = events;
      this._saSvc.closeLoading();
    });
  }
}
