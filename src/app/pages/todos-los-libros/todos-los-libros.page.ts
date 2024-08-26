import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-todos-los-libros',
  templateUrl: './todos-los-libros.page.html',
  styleUrls: ['./todos-los-libros.page.scss'],
})
export class TodosLosLibrosPage implements OnInit {

  Libros: any[] = []

  constructor(private router : Router, private actionrouter: ActivatedRoute) {
    this.actionrouter.queryParams.subscribe( param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.Libros= this.router.getCurrentNavigation()?.extras?.state?.['libros'];
      }
    })
   }

  ngOnInit() {
  }


  irDetallesLibro(libros: any){
    let navigationextras: NavigationExtras = {
      state: {
        libros : libros
      }
    }
    this.router.navigate(['/cada-libro'], navigationextras)
  }

}
