import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cada-libro',
  templateUrl: './cada-libro.page.html',
  styleUrls: ['./cada-libro.page.scss'],
})
export class CadaLibroPage implements OnInit {

 libro : any = { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', imagen: 'assets/img/librohp1.webp'}

  constructor(private menuController : MenuController){

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

}
