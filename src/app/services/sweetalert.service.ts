import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})
export class SweetalertService {
  showLoading() {
    Swal.fire({
      allowOutsideClick: false,
      showCloseButton: true,
      icon: "info",
      text: "Por favor, espera..."
    });
    Swal.showLoading();
  }

  closeLoading() {
    if (Swal.isLoading()) Swal.clickCancel();
  }
}
