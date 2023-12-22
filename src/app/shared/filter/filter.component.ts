import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IFormFilter } from "../../interfaces/article.interface";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss"
})
export class FilterComponent {
  @Output() filter: EventEmitter<IFormFilter> = new EventEmitter<IFormFilter>();
  form!: FormGroup;

  constructor(private _fb: FormBuilder) {
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
    this.filter.emit(this.form.value);
  }
}
