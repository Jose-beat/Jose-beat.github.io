import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrl: './dash-page.component.css'
})
export class DashPageComponent implements OnInit {

  constructor(
    private authService : AuthService
  ){}

  ngOnInit(): void {

  }

  checkVerify(){

  }

}
