import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IFormFilter } from "../../interfaces/event.interface";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss"
})
export class FilterComponent {
  @Input() categories: string[] = [];
  @Output() filter: EventEmitter<IFormFilter> = new EventEmitter<IFormFilter>();
  form!: FormGroup;

  // DATE
  typeCalendar: string = "text";

  // ICONS
  ICON_CALENDAR: string = "assets/icons/calendar.svg";
  ICON_ARROW_DOWN: string = "assets/icons/arrow-down.svg";
  ICON_LOCATION: string = "assets/icons/location.svg";

  constructor(
    private _fb: FormBuilder,
    private _translateSvc: TranslateService
  ) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this._fb.group({
      artist: [""],
      city: [""],
      date: [""],
      category: [""]
    });
  }

  search(): void {
    if (
      this.form.value["category"] === this._translateSvc.instant("FILTER.ALL")
    )
      this.form.patchValue({ category: "" });
    this.filter.emit(this.form.value);
  }
}
