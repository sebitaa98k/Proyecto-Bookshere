import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  username: string | undefined;
  password: string | undefined;
  email: string | undefined;


    // el alertcontroller es para las pantallaz de errores emergentes, bueno no necesariamente de errores
  constructor(private router:Router, private alertcontroller: AlertController) { }

  async MostrarAlerta(message: string){
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alerta.present();
  }

  ngOnInit() {
  }

  validacionDatosCorreo(){
    if(!this.username || !this.password || !this.email){
      this.MostrarAlerta('Se deben añadir todos los datos den los cuadros')
    }else{
    this.Registrarse();
    }
  }


  Registrarse(){
    let navigationextras: NavigationExtras = {
      state:{
        username : this.username,
        password :  this.password,
        email : this.email
      }
    }

    this.router.navigate(['/login'],navigationextras);

  }

  

}
