import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ELanguage } from "../../enums/language.enum";
import { changeLanguage, getLanguage } from "../../utils/language.utils";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrl: "./language.component.scss"
})
export class LanguageComponent {
  IMAGE_SHOW: string = "";
  IMAGE_SPAIN: string = "assets/images/spain.png";
  IMAGE_USA: string = "assets/images/usa.png";

  constructor(private _translateSvc: TranslateService) {}

  ngOnInit(): void {
    this.loadLanguage();
  }

  loadLanguage(): void {
    this.IMAGE_SHOW =
      getLanguage() === ELanguage.es ? this.IMAGE_SPAIN : this.IMAGE_USA;
  }

  toggleLanguage(): void {
    if (getLanguage() === ELanguage.es)
      changeLanguage(ELanguage.en, this._translateSvc);
    else changeLanguage(ELanguage.es, this._translateSvc);
    this.loadLanguage();
  }
}
