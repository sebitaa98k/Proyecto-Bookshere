import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editar-libros-admin',
  templateUrl: './editar-libros-admin.page.html',
  styleUrls: ['./editar-libros-admin.page.scss'],
})
export class EditarLibrosAdminPage implements OnInit {

  constructor(private menuController: MenuController) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuAdministrador');
        this.menuController.enable(false, 'MenuPrincipal');
       }

  ngOnInit() {
  }

}
