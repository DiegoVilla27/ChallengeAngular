import { Component, Input } from "@angular/core";
import { IArticle } from "../../interfaces/article.interface";

@Component({
  selector: "app-article-card",
  templateUrl: "./article-card.component.html",
  styleUrl: "./article-card.component.scss"
})
export class ArticleCardComponent {
  @Input() article!: IArticle;
}
