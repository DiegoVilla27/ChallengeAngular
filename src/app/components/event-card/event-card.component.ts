import { Component, Input } from "@angular/core";
import { IEvent } from "../../interfaces/event.interface";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrl: "./event-card.component.scss"
})
export class EventCardComponent {
  @Input() event!: IEvent;
  ICON_LOCATION: string = "assets/icons/location.svg";
  IMAGE_NOTFOUND: string = "assets/images/notfound.png";
}
