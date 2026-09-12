import { Component, model, Input } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { LfvbIconComponent } from "../lfvb-icon-component/lfvb-icon-component";
import { environment } from '@environments/environment';


@Component({
  selector: 'lfvbLabel',
  imports: [
    MatIconModule,
    MatInputModule,
    LfvbIconComponent
],
  templateUrl: './lfvb-label-component.html',
  styleUrl: './lfvb-label-component.less',
})
export class LfvbLabelComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;


  ///////////////////////////////////////////////
  //Modelo del componente
  //////////////////////////////////////////////
  valor=model<string>("");

  @Input()
  class:string|null=null;

  @Input()
  style:string|null=null;

  @Input()
  icon:string|null=null;

  @Input()
  classIcon:string|null=null;

  @Input()
  svgIcon:string|null=null;


}
