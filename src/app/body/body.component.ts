import {Component, OnDestroy, OnInit} from '@angular/core';
import {bounceOut, routerTransition, rubberBand} from "../utils/animations.util";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Config, ExternalLink} from "../enums.enum";
import {NavigateService} from "../services/navigate.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BodyComponent implements OnInit, OnDestroy {

  constructor(private navigate: NavigateService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.navigate.releaseAll();
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
