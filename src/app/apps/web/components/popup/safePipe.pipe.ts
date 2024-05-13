import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeScript, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})

export class SafePipe implements PipeTransform {

  constructor(protected _sanitzer: DomSanitizer){}

  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript {
      switch(type){
        case 'html':
          return this._sanitzer.bypassSecurityTrustHtml(value);
        case 'style':
          return this._sanitzer.bypassSecurityTrustStyle(value);
        case 'script':
          return this._sanitzer.bypassSecurityTrustScript(value);
        case 'url':
          return this._sanitzer.bypassSecurityTrustUrl(value);
        case 'resourceUrl':
          return this._sanitzer.bypassSecurityTrustResourceUrl(value);
        default:
          return this._sanitzer.bypassSecurityTrustHtml(value);
      }
  }
}
