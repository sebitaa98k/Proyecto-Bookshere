import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-anadir-libros-admin',
  templateUrl: './anadir-libros-admin.page.html',
  styleUrls: ['./anadir-libros-admin.page.scss'],
})
export class AnadirLibrosAdminPage implements OnInit {

  constructor(private menuController: MenuController) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuAdministrador');
        this.menuController.enable(false, 'MenuPrincipal');
       }

  ngOnInit() {
  }

}
