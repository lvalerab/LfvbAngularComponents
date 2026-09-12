import { Component, Input, model, Output } from '@angular/core';
import { environment } from '@environments/environment';
import {MatSelectModule} from '@angular/material/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lfvbSelect',
  imports: [
    FormsModule,
    MatSelectModule,
    NzSelectModule
  ],
  templateUrl: './lfvb-select-component.html',
  styleUrl: './lfvb-select-component.less',
})
export class LfvbSelectComponent {
   @Input()
    tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;
  
  
    ///////////////////////////////////////////////
    //Modelo del componente
    //////////////////////////////////////////////
    valor=model<any>(null);

    ///////////////////////////////////////////////
    //Items del componente
    ///////////////////////////////////////////////
    opciones=model<any[]>([]);


  
    @Input()
    class:string|null=null;
  
    @Input()
    style:string|null=null;

    //////////////////////////////////////////////
    //Propiedades del componente especificas
    //////////////////////////////////////////////
    @Input()
    labelValue:string|null=null;

    @Input()
    groupLabelValue:string|null=null;

    @Input()
    opcGroupLabelValue:string|null=null;

    @Input()
    multiple:boolean=false;

    OnCuandoCambiaValor(event:any) {

    }
}
