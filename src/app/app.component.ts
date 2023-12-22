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
  categories: string[] = [];

  constructor(private _articleSvc: ArticlesService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this._articleSvc.getArticles().subscribe((articles: IArticle[]) => {
      this.articles = articles;
      this.loadCategories();
    });
  }

  loadCategories(): void {
    this.categories = [
      "All",
      ...new Set(this.articles.map((article: IArticle) => article.category))
    ];
  }

  search(filters: IFormFilter): void {
    this._articleSvc
      .getArticlesFilters(filters)
      .subscribe((articles: IArticle[]) => (this.articles = articles));
  }
}
