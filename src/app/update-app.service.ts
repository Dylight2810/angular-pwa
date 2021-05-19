import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppService {
  constructor(private updates: SwUpdate) {
  }

  loadActivateVersion(): void {
    this.updates.available.subscribe(event => {
      if (event) {
        console.log(event);
        alert('New version');
        // this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
