import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'lfvbFormItem',
  imports: [],
  templateUrl: './lfvb-form-item-component.html',
  styleUrl: './lfvb-form-item-component.less',
})
export class LfvbFormItemComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  //Variables
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  @Input()
  inline:boolean=true;

  @Input()
  width:string="25%";


  //Logica de uso del template
  @ContentChild('labelItemTemplate',{read:TemplateRef}) labelItemTemplate!:TemplateRef<any>;

  @ContentChild('itemTemplate',{read:TemplateRef}) itemTemplate!:TemplateRef<any>;
}
