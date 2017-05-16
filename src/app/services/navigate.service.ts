import {Injectable} from "@angular/core";
import {Config, ExternalLink} from "../enums.enum";
import "rxjs/add/operator/pairwise";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {RxhelperService} from "./rxhelper.service";
import {Router} from "@angular/router";

@Injectable()
export class NavigateService {

  constructor(private rxhelper: RxhelperService) {
  }

  navigate(link: ExternalLink) {
    if (link === ExternalLink.blog) {
      console.log("blog");
    } else if (link === ExternalLink.email) {
      let subscriptionEmail = TimerObservable.create(Config.AnimationDuration)
        .subscribe(() => {
          window.location.href = ("mailto:xiefeieric@gmail.com");
        });
      this.rxhelper.add(subscriptionEmail);
    } else if (link === ExternalLink.github) {
      let subscriptionGithub = TimerObservable.create(Config.AnimationDuration)
        .subscribe(() => {
          window.open("https://github.com/xiefeieric");
        });
      this.rxhelper.add(subscriptionGithub);
    } else if (link === ExternalLink.linked) {
      let subscriptionLinked = TimerObservable.create(Config.AnimationDuration)
        .subscribe(() => {
          window.open("https://www.linkedin.com/in/fei-xie-535958115/");
        });
      this.rxhelper.add(subscriptionLinked);
    }
  }

  releaseAll() {
    this.rxhelper.releaseAll();
  }

}
