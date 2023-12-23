import { Component } from "@angular/core";
import { IEvent, IFormFilter } from "./interfaces/event.interface";
import { SweetalertService } from "./services/sweetalert.service";
import { EventsService } from "./services/events.service";
import { TranslateService } from "@ngx-translate/core";
import { ELanguage } from "./enums/language.enum";
import { getLanguage } from "./utils/language.utils";

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
    private _saSvc: SweetalertService,
    private _translateSvc: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadLanguage();
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
      this._translateSvc.instant("FILTER.ALL"),
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

  loadLanguage(): void {
    this._translateSvc.addLangs([ELanguage.es, ELanguage.en]);
    this.verifyExistsLanguage();
  }

  verifyExistsLanguage(): void {
    const lang: string | null = getLanguage();
    lang
      ? this._translateSvc.setDefaultLang(lang)
      : this._translateSvc.setDefaultLang(ELanguage.es);
  }
}
