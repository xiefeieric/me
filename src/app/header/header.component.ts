import {Component, OnInit} from "@angular/core";
import {ScreenSize} from "../enums.enum";
import {Constants} from "../utils/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showSmallMenu: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.showSmallMenu = window.innerWidth < ScreenSize.sm;
  }

  onResize(event) {
    this.showSmallMenu = event.target.innerWidth < ScreenSize.sm;
  }

}
