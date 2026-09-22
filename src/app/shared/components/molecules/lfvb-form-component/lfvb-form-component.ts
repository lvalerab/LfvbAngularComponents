import { Component, Input, Output,ContentChildren,QueryList, EventEmitter } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NzFormModule } from 'ng-zorro-antd/form';
import { environment} from '@environments/environment';
import {LfvbFormItemComponent} from './atoms/lfvb-form-item-component/lfvb-form-item-component';
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'lfvbForm',
  imports: [
    MatFormFieldModule,
    NzFormModule,    
    NgTemplateOutlet
],
  templateUrl: './lfvb-form-component.html',
  styleUrl: './lfvb-form-component.less',
})
export class LfvbFormComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  //////////////////////////////////////////////////////////////////
  //Variables
  //////////////////////////////////////////////////////////////////
  @ContentChildren(LfvbFormItemComponent) items!:QueryList<LfvbFormItemComponent>;

  //////////////////////////////////////////////////////////////////
  //Outputs
  //////////////////////////////////////////////////////////////////
  @Output()
  OnSubmit=new EventEmitter<any>();

  //////////////////////////////////////////////////////////////////
  //Funciones
  //////////////////////////////////////////////////////////////////

  EmitirSubmit(e:any) {
    this.OnSubmit.emit(e);
  }
}
