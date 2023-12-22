import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ArticleCardComponent } from "./article-card.component";
import { IArticle } from "../../interfaces/article.interface";

const article: IArticle = {
  artist: "Artist",
  category: "Category",
  city: "City",
  date: "Date",
  price: 0
};

describe("ArticleCardComponent", () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCardComponent);
    component = fixture.componentInstance;
    component.article = article;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
