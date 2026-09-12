import { Component,model, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '@environments/environment';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'lfvbIcon',
  imports: [
    MatIconModule,
    NzIconModule
],
  templateUrl: './lfvb-icon-component.html',
  styleUrl: './lfvb-icon-component.less',
})
export class LfvbIconComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  

  @Input()
  isSvg:boolean=false;

  @Input()
  isFont:boolean=false;

  @Input()
  oculto:boolean=false;

  @Input()
  label:string="";

  icon=model<string>('');

  
}
