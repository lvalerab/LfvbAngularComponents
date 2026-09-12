import { Component, Input, Output, model, EventEmitter } from '@angular/core';
import { environment} from '@environments/environment';
import { TamanyoAvatar, TipoFiguraAvatar } from './lfvb-avatar-tamanyo';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


@Component({
  selector: 'lfvbAvatar',
  imports: [
    NzAvatarModule
  ],
  templateUrl: './lfvb-avatar-component.html',
  styleUrl: './lfvb-avatar-component.less',
})
export class LfvbAvatarComponent {
 @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ///////////////////////////////////////////////////
  //Modelos permitodos
  ///////////////////////////////////////////////////
  //Texto linkado
  texto=model<string|null>(null);

  //Url de la imagen
  urlImg=model<string|null>(null);

  ///////////////////////////////////////////////////
  //Propiedades
  ///////////////////////////////////////////////////
  @Input()
  class:string|null=null;

  @Input()
  style:string|null=null;

  @Input()
  tamanyo:TamanyoAvatar=TamanyoAvatar.x32;

  @Input()
  tipoAvatar:TipoFiguraAvatar=TipoFiguraAvatar.cuadrado;

  ///////////////////////////////////////////////////
  //Emisores
  ///////////////////////////////////////////////////
  @Output()
  click=new EventEmitter<any>();

  OnClickAvatar(evento:any) {
    this.click.emit(evento);
  }

  ///////////////////////////////////////////////////
  //Variables
  ///////////////////////////////////////////////////
  nTamanyo:number=32;

  ///////////////////////////////////////////////////
  //Funciones
  ///////////////////////////////////////////////////
  GetIniciales() {
    var aux=[];
    var retorno="";
    if(this.texto()!=="") {
      aux=this.texto()?.split(' ')??[];      
      retorno=aux[0][0].toUpperCase();
      if(aux.length>1) 
        retorno+=aux[1][0].toUpperCase();
    }
    return retorno;
  }
}
