import { Component, Input, Output, model, TemplateRef, ContentChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { environment } from '@environments/environment';
import { NzTableModule } from 'ng-zorro-antd/table';
import {MatTableModule} from '@angular/material/table';
import {DefColumnTableMaterial} from './models/DefColumnTableMaterial';


@Component({
  selector: 'lfvbTable',
  imports: [
    NzTableModule,
    MatTableModule,
    NgTemplateOutlet
  ],
  templateUrl: './lfvb-table-component.html',
  styleUrl: './lfvb-table-component.less',
})
export class LfvbTableComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  //Datos
  dataSource=model<any[]>([]);

  //Solo para Angular Material
  @Input()
  definitionColumns:DefColumnTableMaterial[]=[];

  /////////////////////////////////////////////////////////////////////////
  //Templates
  /////////////////////////////////////////////////////////////////////////
  @ContentChild('headerRowTemplate',{read:TemplateRef}) headerRowTemplate!:TemplateRef<any>;

  @ContentChild('rowTemplate',{read:TemplateRef}) rowTemplate!:TemplateRef<any>;
}
