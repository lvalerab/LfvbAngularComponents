import { Component, model, Input, Output } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { NzInputModule } from 'ng-zorro-antd/input';
import { LfvbLabelComponent } from "../lfvb-label-component/lfvb-label-component";
import { FormsModule } from '@angular/forms';
import { environment } from '@environments/environment';

@Component({
  selector: 'lfvbInput',
  imports: [
    FormsModule,
    MatInputModule, 
    LfvbLabelComponent,
    NzInputModule
  ],
  templateUrl: './lfvb-input-component.html',
  styleUrl: './lfvb-input-component.less',
})
export class LfvbInputComponent {

  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  valor=model<any>('');

  @Input()
  label:string|null=null;

  @Input()
  placeholder:string|null=null;

  @Input()
  tipo:string|null="text";

  @Input()
  classContainer:string|null=null;

  @Input()
  styleContainer:string|null=null;

  @Input()
  classLabel:string|null=null;

  @Input()
  styleLabel:string|null=null;

  @Input()
  classInput:string|null=null;

  @Input()
  styleInput:string|null=null;


  CuandoCambiaValor(evento:any) {
    this.valor.set(evento);
  }
}
