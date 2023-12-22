import { Component, Input } from "@angular/core";
import { IArticle } from "../../interfaces/article.interface";

@Component({
  selector: "app-article-card",
  templateUrl: "./article-card.component.html",
  styleUrl: "./article-card.component.scss"
})
export class ArticleCardComponent {
  @Input() article!: IArticle;
  ICON_LOCATION: string = "assets/icons/location.svg";
  IMAGE_NOTFOUND: string = "assets/images/notfound.png";
}
