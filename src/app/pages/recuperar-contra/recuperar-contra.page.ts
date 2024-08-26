import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {


  correo : string = "";

  constructor(private router : Router) { }

  ngOnInit() {
  }


  irCambiarContra(){

    this.router.navigate(['/cambiar-contra'])
  }


}
