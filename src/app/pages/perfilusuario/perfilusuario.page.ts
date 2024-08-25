import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {

  usuario : string = "";
  password : string = "";
  email : string = "";



  constructor(private router: Router, private activaterouter:ActivatedRoute) {
    this.activaterouter.queryParams.subscribe((param)=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['usuario'],
        this.password = this.router.getCurrentNavigation()?.extras?.state?.['password'],
        this.email = this.router.getCurrentNavigation()?.extras?.state?.['email']
      }
    })

   }

  ngOnInit() {
  }

}
