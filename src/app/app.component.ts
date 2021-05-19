import { Component, Inject, OnInit } from '@angular/core';
import { UpdateAppService } from './update-app.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa';
  snackBarRef: MatSnackBarRef<any>;

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    private updates: SwUpdate,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.updates.available.subscribe(event => {
      console.log(event);
      if (event) {
        this.snackBarRef = this.snackBar.open('New application version was deployed', 'Reload App');
        this.snackBarRef.onAction().subscribe(() => {
          this.doc.location.reload();
        });
      }
    });
  }
}
