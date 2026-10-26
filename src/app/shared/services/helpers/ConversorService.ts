import { Injectable} from "@angular/core";


enum UnidadesCss {
    cm,
    mm,
    Q,
    in,
    pc,
    pt,
    px
}


@Injectable({
    providedIn:'root'
})
export class ConversorServices {
    
    ConvertUnidadFijaCss(value:number,unidad:UnidadesCss, unidadTo:UnidadesCss):number {
        var factor:number=0;
        var factorI:number=0;
        //Pasamos a px todo
        switch(unidad) {
            case UnidadesCss.cm:
                factor=37.8;                
                break;
            case UnidadesCss.mm:
                factor=3.78;
                break;
            case UnidadesCss.Q:
                factor=0.945;
                break;
            case UnidadesCss.in:
                factor=96;
                break;
            case UnidadesCss.pc:
                factor=16;
                break;
            case UnidadesCss.pt:
                factor=1.33;
                break;
            default:
                factor=1;
                break
        }  

        //Pasamos a la unidad indicada
        switch(unidadTo) {
            case UnidadesCss.cm:
                factorI=1/37.8;                
                break;
            case UnidadesCss.mm:
                factorI=1/3.78;
                break;
            case UnidadesCss.Q:
                factorI=1/0.945;
                break;
            case UnidadesCss.in:
                factorI=1/96;
                break;
            case UnidadesCss.pc:
                factorI=1/16;
                break;
            case UnidadesCss.pt:
                factorI=1/1.33;
                break;
            default:
                factorI=1/1;
                break
        } 
        var resultado=value*factor*factorI; //Transformado a px;

        return resultado;
    }

    ConvertRgbaToCss(red:number,green:number,blue:number,alfa:number) {
        return "rgba("+red+","+green+","+blue+","+alfa+")";
    }
}