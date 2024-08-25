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
    //lista de libros clasicos
    { title: '1984', author: 'George Orwell', image: 'assets/img/libro1984.jpg' },
    { title: 'El gran Gatsby', author: 'F. Scott Fitzgerald', image: 'assets/img/librogatsby.jpeg' },
    { title: 'Orgullo y prejuicio', author: 'Jane Austen', image: 'assets/img/libroorgulloyprej.webp' },
    //Lista de libros de fantasia
    { title: 'El Hobbit', author: 'J.R.R. Tolkien', image: 'assets/img/librohobbit.webp' },
    { title: 'Harry Potter y la piedra filosofal', author: 'J.K. Rowling', image: 'assets/img/librohp1.webp' },
    { title: 'Harry Potter y la cámara secreta', author: 'J.K. Rowling', image: 'assets/img/librohp2.webp' },
    { title: 'Harry Potter y el prisionero de Azkaban', author: 'J.K. Rowling', image: 'assets/img/librohp3.webp' },
    { title: 'Harry Potter y el cáliz de fuego', author: 'J.K. Rowling', image: 'assets/img/librohp4.webp' },
    { title: 'Harry Potter y la Orden del Fénix', author: 'J.K. Rowling', image: 'assets/img/librohp5.webp' },
    { title: 'Harry Potter y el misterio del príncipe', author: 'J.K. Rowling', image: 'assets/img/librohp6.webp' },
    { title: 'Harry Potter y las reliquias de la Muerte', author: 'J.K. Rowling', image: 'assets/img/librohp7.avif' },
    { title: 'Cancion de hielo y fuego: Juego de tronos', author: 'George R.R. Martin', image: 'assets/img/librogot1.webp' },
    { title: 'Alas de sangre', author: 'Rebecca Yarros', image: 'assets/img/alasdesangre.webp' },

    //lista de libros de terror
    { title: 'It', author: 'Stephen King', image: 'assets/img/libroIt.webp' },
    { title: 'La maldición de Hill House', author: 'Shirley Jackson', image: 'assets/img/librohillhouse.webp' },
    { title: 'El Exorcista', author: 'William Peter Blatty', image: 'assets/img/libroexorcista.webp' },
    //agregar mas categorias romperelcirculo
    { title: 'Romper el circulo', author: 'Colleen Hoover', image: 'assets/img/romperelcirculo.webp' },
    { title: 'Tan Poca Vida', author: 'Hanya Yanagihara', image: 'assets/img/tanpocavida.webp' },
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

  ngOnInit() {
  }

}
