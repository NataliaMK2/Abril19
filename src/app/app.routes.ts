import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

export const routes: Routes = [
  { path: 'inicio', title:'Inicio', component: InicioComponent },
  { path: 'quienes-somos', title:'Quienes somos', component: QuienesSomosComponent },
  { path: 'donde-estamos', title:'donde estamos',  component: DondeEstamosComponent },
  { path: 'comentarios',title:'Comentarios',  component: ComentariosComponent }
];


