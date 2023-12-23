import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})
export class SweetalertService {
  constructor(private _translateSvc: TranslateService) {}

  showLoading() {
    Swal.fire({
      allowOutsideClick: false,
      showCloseButton: false
    });
    Swal.showLoading();
  }

  closeLoading() {
    if (Swal.isLoading()) Swal.clickCancel();
  }
}
