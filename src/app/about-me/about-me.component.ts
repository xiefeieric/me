import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {routerTransition} from "../utils/animations.util";
import {NavigationEnd, Router} from "@angular/router";
import {NavigateService} from "../services/navigate.service";
import {RxhelperService} from "../services/rxhelper.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AboutMeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private renderer: Renderer2, private rxhelper: RxhelperService) {
  }

  ngOnInit() {
    let subscription = this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.renderer.setProperty(document.body, 'scrollTop', 0);
      });
    this.rxhelper.add(subscription);
  }

  ngOnDestroy() {
    this.rxhelper.releaseAll();
  }


  linkToRoller() {
    window.open("https://rolleragency.co.uk/");
  }

  linkToShef() {
    window.open("https://www.sheffield.ac.uk/");
  }

}
