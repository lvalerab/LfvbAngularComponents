import { Component, Input, Output } from '@angular/core';
import {MatButtonAppearance, MatButtonModule} from '@angular/material/button';
import {NzButtonModule, NzButtonShape, NzButtonSize, NzButtonType} from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '@environments/environment';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { LfvbIconComponent } from "../lfvb-icon-component/lfvb-icon-component";

@Component({
  selector: 'lfvbButton',
  imports: [
    MatButtonModule,
    MatIconModule,
    NzButtonModule,
    LfvbIconComponent
],
  templateUrl: './lfvb-button-component.html',
  styleUrl: './lfvb-button-component.less',
})
export class LfvbButtonComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  //PROPIEDADES ANGULAR MATRIAL
  @Input()
  tipo:MatButtonAppearance="text";

  @Input()
  link:boolean=false;

  @Input()
  icon:string|null=null;

  @Input()
  floating:boolean=false;

  @Input()
  MiniFAB:boolean=false;

  @Input()
  ExtendedFAB:boolean=false;


  //PROPIEDADES NG ZORRO
  @Input()
  nzTipo:NzButtonType|null=null;

  @Input()
  nzForma:NzButtonShape|null=null;

  @Input()
  nzTamanyo:NzSizeLDSType|null=null;


  //PROPIEDADES GENERICAS DEL CONTROL
  @Input()
  label:string="";  

  @Input()
  href:string|null=null;

  @Input()
  target:string|null=null;






  OnCuandoHaceClick(evento:MouseEvent) {

  }

}
