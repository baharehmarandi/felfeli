import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  config = new MatSnackBarConfig();
  constructor(private matSnack: MatSnackBar) { }

  showError(message: string): void{
    this.config.panelClass = ['redSnackbar'];
    this.config.duration = 3000;
    this.matSnack.open(message, undefined, this.config);
  }

  showSuccess(message: string): void{
    this.config.panelClass = ['greenSnackbar'];
    this.config.duration = 3000;
    this.matSnack.open(message, undefined, this.config);
  }
}
