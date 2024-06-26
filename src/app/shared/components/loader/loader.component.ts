import { Component, Input } from '@angular/core';

@Component({
  selector: 'beat-loader',
  templateUrl: './loader.component.html',
  styles: [`
        .full-screen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Negro con transparencia del 50% */
          z-index: 9999; /* Asegura que esté por encima de otros elementos */
          display: flex;
          justify-content: center;
          align-items: center;
    }
    `]
})
export class LoaderComponent {

  @Input()
  public loader? : boolean;
}
