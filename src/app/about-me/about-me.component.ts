import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../utils/animations.util";
import {Router} from "@angular/router";
import {NavigateService} from "../services/navigate.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AboutMeComponent implements OnInit {

  constructor(private navigate:NavigateService) {
  }

  ngOnInit() {
  }

  linkToRoller() {
    window.open("https://rolleragency.co.uk/");
  }

}
