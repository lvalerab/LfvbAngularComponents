import { Component, Input, Output, model } from '@angular/core';
import { environment } from '@environments/environment';
import { MenuItemModel } from '../../models/MenuItemModel';

@Component({
  selector: 'lfvbMenuItem',
  imports: [
],
  templateUrl: './lfvb-menu-item-component.html',
  styleUrl: './lfvb-menu-item-component.less',
})
export class LfvbMenuItemComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ///////////////////////////////////////////////////////////////////////////
  //Modelo del menu
  ///////////////////////////////////////////////////////////////////////////
  menuItem=model<MenuItemModel>();


  EjecutarAction(args:any, menu:MenuItemModel|undefined) {

  }
}
