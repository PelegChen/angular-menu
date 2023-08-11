import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'menu-demo',
  animations: [
    trigger('toggleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ],
  templateUrl: 'menu-demo.component.html',
})
export class MenuDemoComponent {}
