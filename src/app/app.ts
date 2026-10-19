import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { groupSelectEntity } from './data/mocks/select/optionSelectEntity';
import { AppRoutingModule } from './app.routes';
import { MenuItemModel } from './shared/components/molecules/lfvb-menu-component/models/MenuItemModel';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    SharedModule
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

  menu:MenuItemModel[]=[
    {
      label:'Menu de usuario',
      icon:null,
      action:null,      
      routerLink:null,
      items:[
        {
          label:"Submenu 0-0",
          icon:null,
          action:null,
          items:[
            {
              label:'Submenu 0-0-0',
              icon:null,
              action:null,      
              routerLink:null,
              items:null
            },
            {
              label:'Submenu 0-0-1',
              icon:null,
              action:null,      
              routerLink:null,
              items:null
            },
          ],
          routerLink:null
        },
        {
          label:"Submenu 0-1",
          icon:null,
          action:null,
          items:null,
          routerLink:null
        },
        {
          label:"Submenu 0-2",
          icon:null,
          action:null,
          items:null,
          routerLink:null
        },
      ]
    },
    {
      label:'Aplicaciones de usuario',
      icon:null,
      action:null,
      items:null,
      routerLink:null
    },
    {
      label:'Aplicaciones de usuario',
      icon:null,
      action:null,
      routerLink:null,
      items:[
        {
          label:"Submenu 3-0",
          icon:null,
          action:null,
          items:null,
          routerLink:null,
        },
        {
          label:"Submenu 3-1",
          icon:null,
          action:null,
          items:null,
          routerLink:null,
        },
        {
          label:"Submenu 3-2",
          icon:null,
          action:null,
          items:null,
          routerLink:null
        },
      ]
    }
  ];
}
