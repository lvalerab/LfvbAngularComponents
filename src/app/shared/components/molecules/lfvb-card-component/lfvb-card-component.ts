import { Component, ContentChild, Input, Output, TemplateRef, model } from '@angular/core';
import { environment } from '@environments/environment';
import {MatCardModule} from '@angular/material/card';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lfvbCard',
  imports: [
    NgTemplateOutlet,
    MatCardModule,
    NzCardModule
],
  templateUrl: './lfvb-card-component.html',
  styleUrl: './lfvb-card-component.less',
})
export class LfvbCardComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  //////////////////////////////////////////////////////////////////////////
  //Propiedades del componente
  //////////////////////////////////////////////////////////////////////////
  @Input()
  srcImgCard:string|null=null;

  @Input()
  txtImgCard:string|null=null;

  @Input()
  width:string="150px";

  @Input()
  inline:boolean=false;


  //////////////////////////////////////////////////////////////////////////
  //Templates del componente
  //////////////////////////////////////////////////////////////////////////
  @ContentChild('headerCardTemplate',{read:TemplateRef}) headerCardTemplate!:TemplateRef<any>;

  @ContentChild('contentCardTemplate',{read:TemplateRef}) contentCardTemplate!:TemplateRef<any>;

  @ContentChild('imagenCardTemplate',{read:TemplateRef}) imagenCardTemplate!:TemplateRef<any>;

  @ContentChild('menuCardTemplate',{read:TemplateRef}) menuCardTemplate!:TemplateRef<any>;

  @ContentChild('footerCardTemplate',{read:TemplateRef}) footerCardTemplate!:TemplateRef<any>;
}
