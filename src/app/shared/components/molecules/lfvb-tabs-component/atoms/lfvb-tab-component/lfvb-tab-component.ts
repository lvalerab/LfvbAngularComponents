import { Component, ContentChild, Input, Output, TemplateRef, model } from '@angular/core';
import { environment } from '@environments/environment';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'lfvbTab',
  imports: [       
    NzTabsModule,
    MatTabsModule    
],
  templateUrl: './lfvb-tab-component.html',
  styleUrl: './lfvb-tab-component.less',
})
export class LfvbTabComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ////////////////////////////////////////////////////
  //Datos del tab
  @Input({required:true})
  label:string="";

  @Input()
  icon:string="";

  @Input({required:true})
  tabId:string="";

  @Input()
  active:boolean=false;

  //Logica de uso del template
  @ContentChild('tituloTabTemplate',{read:TemplateRef}) headerTemplate!:TemplateRef<any>;

  @ContentChild('tabContainer',{read:TemplateRef}) tabContainer!:TemplateRef<any>;

}
