import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventCardComponent } from "./event-card/event-card.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [EventCardComponent],
  imports: [CommonModule, TranslateModule],
  exports: [EventCardComponent]
})
export class ComponentsModule {}
