import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  writeEmail() {
    window.location.href = ("mailto:xiefeieric@gmail.com");
  }

  openLinkedin() {
    window.open("https://www.linkedin.com/in/fei-xie-535958115/");
  }

  openGithub() {
    window.open("https://github.com/xiefeieric");
  }

}
