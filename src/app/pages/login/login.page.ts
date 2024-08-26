import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | undefined;
  usuario: string | undefined;
  password: string | undefined;

  emailV: string = '';
  usuarioV: string = '';
  passwordV: string = '';

  usuarioAdmin : string = 'ADMIN';
  passwordAdmin : string = 'colocolo';

  constructor(
    private router: Router,
    private activaterouter: ActivatedRoute,
    private alertcontroller: AlertController
  ) {
    this.activaterouter.queryParams.subscribe((param) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.emailV =
          this.router.getCurrentNavigation()?.extras?.state?.['email'];
        this.usuarioV =
          this.router.getCurrentNavigation()?.extras?.state?.['username'];
        this.passwordV =
          this.router.getCurrentNavigation()?.extras?.state?.['password'];
      }
    });
  }

  async MostrarAlerta(mensaje: string) {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alerta.present();
  }

  inicioSesion() {
    if (!this.usuario || !this.password) {
      this.MostrarAlerta('Debe ingresar datos');
    } else if (
      this.usuario === this.usuarioV &&
      this.password === this.passwordV
    ) {
      let navigationextras: NavigationExtras = {
        state: {
          usuario: this.usuario,
          email: this.emailV,
          password  : this.password
        },
      };
      this.router.navigate(['/feed'], navigationextras);
    } else if(this.usuario===this.usuarioAdmin && this.password===this.passwordAdmin){
      this.router.navigate(['/administrador'])
    }else{
      this.MostrarAlerta('Los datos son incorrectos');
    }
  }

  ngOnInit() {}
}
