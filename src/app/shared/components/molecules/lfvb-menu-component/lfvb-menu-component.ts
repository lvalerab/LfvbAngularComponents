import { Component, Input, Output, model,ContentChild, TemplateRef } from '@angular/core';
import { environment } from '@environments/environment';
import { MenuItemModel } from './models/MenuItemModel';
import { MatMenuModule } from '@angular/material/menu';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LfvbLabelComponent } from '../../atoms/lfvb-label-component/lfvb-label-component';
import { NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'lfvbMenu',
  imports: [
    MatMenuModule,
    NzMenuModule,
    LfvbLabelComponent,
    NgTemplateOutlet,
    MatButtonModule
],
  templateUrl: './lfvb-menu-component.html',
  styleUrl: './lfvb-menu-component.less',
})
export class LfvbMenuComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ////////////////////////////////////////////////////////////////////////////////////////////
  //Modelo de los menus
  ////////////////////////////////////////////////////////////////////////////////////////////  
  menus=model<MenuItemModel[]>();

  nivel=model<string|null>();

  ////////////////////////////////////////////////////////////////////////////////////////////
  //Propiedades
  ////////////////////////////////////////////////////////////////////////////////////////////  
  @Input()
  zIndex:number=1000;

  @ContentChild('headerMenuLfvb',{read:TemplateRef}) headerMenuLfvb!:TemplateRef<any>;

  @ContentChild('identMenuLfvb',{read:TemplateRef}) identMenuLfvb!:TemplateRef<any>;

  ejecutarAccion(e:any, item:MenuItemModel) {

  }
}
