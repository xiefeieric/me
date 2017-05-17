import {animate, state, style, transition, trigger} from "@angular/animations";
/**
 * Created by Fei on 13/05/2017.
 */

export function routerTransition() {
  return fadeInOut();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position: 'absolute', width: '100%'})),
    state('*', style({position: 'absolute', width: '100%'})),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position: 'absolute', width: '100%'})),
    state('*', style({position: 'absolute', width: '100%'})),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function fadeIn(elem, iterations) {
  var keyframes = [
    {opacity: '0', offset: 0},
    {opacity: '1', offset: 1}];
  var timing = {duration: 900, iterations: iterations};
  return elem.animate(keyframes, timing);
}

function fadeInOut() {
  return trigger('routerTransition', [
    state('void', style({position: 'absolute', width: '100%'})),
    state('*', style({position: 'absolute', width: '100%'})),
    transition(':enter', [
      style({opacity: '0', offset: 0}),
      animate('0.5s ease-in-out', style({opacity: '1', offset: 1}))
    ]),
    transition(':leave', [
      style({opacity: '1', offset: 1}),
      animate('0.5s ease-in-out', style({opacity: '0', offset: 0}))
    ])
  ]);
}


export function bounceIn(elem, iterations) {
  var keyframes = [
    {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0},
    {transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2},
    {transform: 'scale3d(.9, .9, .9)', offset: 0.4},
    {transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6},
    {transform: 'scale3d(.97, .97, .97)', offset: 0.8},
    {transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1}];
  var timing = {duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
  return elem.animate(keyframes, timing);
}

export function bounceOut(elem, iterations) {
  var keyframes = [
    {transform: 'none', opacity: '1', offset: 0},
    {transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2},
    {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5},
    {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55},
    {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1}];
  var timing = {duration: 900, iterations: iterations};
  return elem.animate(keyframes, timing);
}

export function rubberBand(elem, iterations) {
  var keyframes = [
    {transform: 'scale3d(1, 1, 1)', offset: 0},
    {transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3},
    {transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4},
    {transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5},
    {transform: 'scale3d(.95, 1.05, 1)', offset: 0.65},
    {transform: 'scale3d(1.05, .95, 1)', offset: 0.75},
    {transform: 'scale3d(1, 1, 1)', offset: 1}];
  var timing = {duration: 900, iterations: iterations};
  return elem.animate(keyframes, timing);
}
