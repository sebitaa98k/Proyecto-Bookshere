import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {


  correo : string = "";

  constructor(private router : Router, private menuController: MenuController) { 
    
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

  }

  ngOnInit() {
  }


  irCambiarContra(){

    this.router.navigate(['/cambiar-contra'])
  }


}
