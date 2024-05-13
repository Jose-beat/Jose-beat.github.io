import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafePipe } from './safePipe.pipe';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit{
  public documentLink? : SafeUrl;
  private safePipe : SafePipe = new SafePipe(this.domSanitizer);


  constructor(private domSanitizer: DomSanitizer,  @Inject(MAT_DIALOG_DATA) private data:any){}

  ngOnInit(): void {
    this.documentLink = this.data.link;
  }


}
