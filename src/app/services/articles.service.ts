import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { IArticle, IFormFilter } from "../interfaces/article.interface";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor(private _http: HttpClient) {}

  getArticles(): Observable<IArticle[]> {
    return this._http.get<IArticle[]>(`${environment.api_url}/articles`);
  }

  getArticlesFilters(filters: IFormFilter): Observable<IArticle[]> {
    return this._http.get<IArticle[]>(
      `${environment.api_url}/articles?${this.buildParams(filters)}`
    );
  }

  private buildParams(filters: IFormFilter): string {
    const queryParams: string = Object.keys(filters)
      .filter((key: string) => filters[key] !== "")
      .map((key: string) => `${key}=${filters[key]}`)
      .join("&");
    return queryParams;
  }
}
