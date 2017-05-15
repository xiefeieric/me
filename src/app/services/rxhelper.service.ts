import {Injectable} from '@angular/core';
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class RxhelperService {
  private subscriptions: Subscription[];

  constructor() {
    this.subscriptions = [];
  }

  add(subscription) {
    this.subscriptions.push(subscription);
  }

  releaseAll() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

}
