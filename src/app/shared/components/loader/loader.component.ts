import { Component, Input } from '@angular/core';

@Component({
  selector: 'beat-loader',
  templateUrl: './loader.component.html',
  styles: []
})
export class LoaderComponent {

  @Input()
  public loader? : boolean;
}
