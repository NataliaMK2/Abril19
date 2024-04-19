import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css' 
  imports : []
})
export class ComentariosComponent {
comentarios:string[]=[];
}
aniadirComentario(comentario:string){
  this.comentarios.push(comentario);
}}
