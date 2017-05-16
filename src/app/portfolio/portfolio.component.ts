import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {routerTransition} from "../utils/animations.util";
import {RxhelperService} from "../services/rxhelper.service";
import {NavigationEnd, Router} from "@angular/router";
import {ScreenSize} from "../enums.enum";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private cols: number = 3;

  constructor(private router: Router, private renderer: Renderer2, private rxhelper: RxhelperService) {
  }

  ngOnInit() {
    this.scrollTop();
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
