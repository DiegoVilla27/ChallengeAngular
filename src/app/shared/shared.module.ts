import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./filter/filter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageComponent } from "./language/language.component";

@NgModule({
  declarations: [FilterComponent, LanguageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslateModule],
  exports: [FilterComponent, LanguageComponent]
})
export class SharedModule {}
