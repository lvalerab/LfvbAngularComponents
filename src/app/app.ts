import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { optionSelectEntity, groupSelectEntity } from './data/mocks/select/optionSelectEntity';
import { AppRoutingModule } from './app.routes';
import { LfvbAvatarComponent } from './shared/components/atoms/lfvb-avatar-component/lfvb-avatar-component';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    SharedModule,
    LfvbAvatarComponent
],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('frontend');

  texto:string="Hola caracola";

  selectValores:groupSelectEntity[]=[
    {
      label:"Primero grupo",
      opciones:[
        {
          label:"Grupo 1, opcion 1",
          valor:null
        },
        {
          label:"Grupo 1, opcion 2",
          valor:null
        },
        {
          label:"Grupo 1, opcion 3",
          valor:null
        },
        {
          label:"Grupo 1, opcion 4",
          valor:null
        }
      ]
    },
    {
      label:"Segundo grupo",
      opciones:[
        {
          label:"Grupo 2, opcion 1",
          valor:null
        },
        {
          label:"Grupo 2, opcion 2",
          valor:null
        },
        {
          label:"Grupo 2, opcion 3",
          valor:null
        },
        {
          label:"Grupo 2, opcion 4",
          valor:null
        }
      ]
    }
  ];


  dataSource=[
    {Id:1,Nombre:"Valor fila 1",Descripcion:"Esto es un valor de una fila"},
    {Id:2,Nombre:"Valor fila 2",Descripcion:"Esto es un valor de una fila P"},
    {Id:3,Nombre:"Valor fila 3",Descripcion:"Esto es un valor de una fila Z"},
    {Id:4,Nombre:"Valor fila 4",Descripcion:"Esto es un valor de una fila Y"},
  ]
}
