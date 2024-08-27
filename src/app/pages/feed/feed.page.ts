import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  usuario : string = "";
  email : string = "";
  password : string = "";

 
  libros: any[] = [
    // lista de libros clásicos
    { titulo: '1984', autor: 'George Orwell', imagen: 'assets/img/libro1984.jpg' },
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', imagen: 'assets/img/librogatsby.jpeg' },
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', imagen: 'assets/img/libroorgulloyprej.webp' },
    // Lista de libros de fantasía
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', imagen: 'assets/img/librohobbit.webp' },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', imagen: 'assets/img/librohp1.webp' },
    { titulo: 'Harry Potter y la cámara secreta', autor: 'J.K. Rowling', imagen: 'assets/img/librohp2.webp' },
    { titulo: 'Harry Potter y el prisionero de Azkaban', autor: 'J.K. Rowling', imagen: 'assets/img/librohp3.webp' },
    { titulo: 'Harry Potter y el cáliz de fuego', autor: 'J.K. Rowling', imagen: 'assets/img/librohp4.webp' },
    { titulo: 'Harry Potter y la Orden del Fénix', autor: 'J.K. Rowling', imagen: 'assets/img/librohp5.webp' },
    { titulo: 'Harry Potter y el misterio del príncipe', autor: 'J.K. Rowling', imagen: 'assets/img/librohp6.webp' },
    { titulo: 'Harry Potter y las reliquias de la Muerte', autor: 'J.K. Rowling', imagen: 'assets/img/librohp7.avif' },
    { titulo: 'Canción de hielo y fuego: Juego de tronos', autor: 'George R.R. Martin', imagen: 'assets/img/librogot1.webp' },
    { titulo: 'Alas de sangre', autor: 'Rebecca Yarros', imagen: 'assets/img/alasdesangre.webp' },
  
    // lista de libros de terror
    { titulo: 'It', autor: 'Stephen King', imagen: 'assets/img/libroIt.webp' },
    { titulo: 'La maldición de Hill House', autor: 'Shirley Jackson', imagen: 'assets/img/librohillhouse.webp' },
    { titulo: 'El Exorcista', autor: 'William Peter Blatty', imagen: 'assets/img/libroexorcista.webp' },
    // agregar más categorías
    { titulo: 'Romper el círculo', autor: 'Colleen Hoover', imagen: 'assets/img/romperelcirculo.webp' },
    { titulo: 'Tan Poca Vida', autor: 'Hanya Yanagihara', imagen: 'assets/img/tanpocavida.webp' },
  ];

  librosFiltrados: any[] = [];




  constructor(private router : Router, private activaterouter: ActivatedRoute){
    this.activaterouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
        this.email = this.router.getCurrentNavigation()?.extras?.state?.['email'];
        this.password = this.router.getCurrentNavigation()?.extras?.state?.['password'];
      }
    })
   }


  cerrarSesion(){
    this.router.navigate(['/login'])
  }
  irPerfilUsuario(){
    let navigationextras: NavigationExtras = {
      state:{
        usuario : this.usuario,
        password : this.password,
        email: this.email
      }
    }
    this.router.navigate(['/perfilusuario'], navigationextras)
  }

  irTodosLosLibros(){
    let navigationextras : NavigationExtras={
      state:{
        libros: this.libros
      }
    }

    this.router.navigate(['/todos-los-libros'],navigationextras)
  }

  ngOnInit() {
  }

}
