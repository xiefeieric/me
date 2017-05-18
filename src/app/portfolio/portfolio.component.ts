import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {routerTransition} from "../utils/animations.util";
import {RxhelperService} from "../services/rxhelper.service";
import {NavigationEnd, Router} from "@angular/router";
import {ScreenSize} from "../enums.enum";
declare var particlesJS: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private cols: number = 3;
  private showParticles: boolean = true;

  constructor(private router: Router, private renderer: Renderer2, private rxhelper: RxhelperService) {
  }

  ngOnInit() {

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });

    this.scrollTop();
    if (window.innerWidth < ScreenSize.xs) {
      this.cols = 1;
      this.showParticles = false;
    } else if (window.innerWidth > ScreenSize.xs && window.innerWidth < ScreenSize.md) {
      this.cols = 2;
      this.showParticles = true;
    } else {
      this.cols = 3;
      this.showParticles = true;
    }
  }

  private scrollTop() {
    let subscription = this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.renderer.setProperty(document.body, 'scrollTop', 0);
      });
    this.rxhelper.add(subscription);
  }

  ngOnDestroy(): void {
    this.rxhelper.releaseAll();
  }

  onResize(event) {
    if (event.target.innerWidth < ScreenSize.xs) {
      this.cols = 1;
    } else if (event.target.innerWidth > ScreenSize.xs && event.target.innerWidth < ScreenSize.md) {
      this.cols = 2;
    } else {
      this.cols = 3;
    }
  }

}
