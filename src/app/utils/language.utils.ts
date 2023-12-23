import { TranslateService } from "@ngx-translate/core";

export const getLanguage = () => localStorage.getItem("lang");

export const changeLanguage = (
  lang: string,
  translateSvc: TranslateService
) => {
  localStorage.setItem("lang", lang);
  translateSvc.setDefaultLang(lang);
};
