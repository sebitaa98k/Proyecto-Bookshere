import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.page.html',
  styleUrls: ['./cambiar-contra.page.scss'],
})
export class CambiarContraPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  irLogin(){
    this.router.navigate(['/login'])
  }

}
