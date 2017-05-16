import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {routerTransition} from "../utils/animations.util";
import {RxhelperService} from "../services/rxhelper.service";
import {NavigationEnd, Router} from "@angular/router";
declare const jQuery: any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NotesComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private renderer: Renderer2, private rxhelper: RxhelperService) {
  }

  ngOnInit() {
    this.scrollTop();
  }

  ngOnDestroy(): void {
    this.rxhelper.releaseAll();
  }

  private scrollTop() {
    let subscription = this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.renderer.setProperty(document.body, 'scrollTop', 0);
      });
    this.rxhelper.add(subscription);
  }

}
