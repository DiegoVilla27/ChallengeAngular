import { Component } from "@angular/core";
import { IArticle, IFormFilter } from "./interfaces/article.interface";
import { ArticlesService } from "./services/articles.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  articles: IArticle[] = [];

  constructor(private _articleSvc: ArticlesService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this._articleSvc
      .getArticles()
      .subscribe((articles: IArticle[]) => (this.articles = articles));
  }

  search(filters: IFormFilter): void {
    this._articleSvc
      .getArticlesFilters(filters)
      .subscribe((articles: IArticle[]) => (this.articles = articles));
  }
}
