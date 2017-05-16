import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {bounceOut, routerTransition, rubberBand} from "../utils/animations.util";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Config, ExternalLink} from "../enums.enum";
import {NavigateService} from "../services/navigate.service";
import {NavigationEnd, Router} from "@angular/router";
import {RxhelperService} from "../services/rxhelper.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BodyComponent implements OnInit, OnDestroy {

  constructor(private navigate: NavigateService, private router: Router,
              private renderer: Renderer2, private rxhelper: RxhelperService) {
  }

  ngOnInit() {
    let subscription = this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.renderer.setProperty(document.body, 'scrollTop', 0);
      });
    this.rxhelper.add(subscription);
  }

  ngOnDestroy() {
    this.navigate.releaseAll();
    this.rxhelper.releaseAll();
  }

  writeEmail(elem) {
    try {
      rubberBand(elem, 1);
      this.navigate.navigate(ExternalLink.email);
    } catch (e) {
      this.navigate.navigate(ExternalLink.email);
    }
  }

  openLinkedin(elem) {
    try {
      rubberBand(elem, 1);
      this.navigate.navigate(ExternalLink.linked);
    } catch (e) {
      this.navigate.navigate(ExternalLink.linked);
    }
  }

  openGithub(elem) {
    try {
      rubberBand(elem, 1);
      this.navigate.navigate(ExternalLink.github);
    } catch (e) {
      this.navigate.navigate(ExternalLink.github);
    }
  }

  openBlog(elem) {
    try {
      rubberBand(elem, 1);
      this.navigate.navigate(ExternalLink.blog);
    } catch (e) {
      this.navigate.navigate(ExternalLink.blog);
    }
  }

}
