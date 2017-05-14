import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../utils/animations.util";
declare const jQuery: any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NotesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
