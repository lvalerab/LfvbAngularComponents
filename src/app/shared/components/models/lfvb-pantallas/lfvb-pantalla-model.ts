import { signal, inject } from "@angular/core";
import { GestorPantallasServices } from "@app/shared/services/pantallas/GestorPantallasServices";
import { LfvbToastService } from "../../organisms/lfvb-toast-component/services/lfvb-toast-service";

export class LfvbPantallaModel {

    private _gsp=inject(GestorPantallasServices);
    private _tsv=inject(LfvbToastService);
    
    private _id=signal<string>("");
    readonly id=this._id.asReadonly();

    zIndex=signal<number>(0);

    minimizada=signal<boolean>(false);    
    maximizada=signal<boolean>(false);
    modal=signal<boolean>(false);
    x=signal<string>("0px");
    y=signal<string>("0px");
    alto=signal<string>("200px");
    ancho=signal<string>("300px");

    
    constructor(modal:boolean) {
        const id = Math.random().toString(36).substring(2, 9);
        this._id.set(id);
        this.modal.set(modal);        
        this._gsp.ApilarPantalla(this); //Gestionamos el apilamiento de la pantalla        
    }

    CentrarPantalla() {
        const ancho:number=window.innerWidth/2;
        const alto:number=window.innerHeight/2;
        var calcular:boolean=false;
        var pan:number=0;
        var pal:number=0;
        debugger;

        //Pasamos los valores que podamos a px
        if(this.ancho().toLocaleLowerCase().indexOf("px")>0) {
            pan=parseInt(this.ancho().replace("px",""),10);
            calcular=true;
        } else if(this.ancho().toLocaleLowerCase().indexOf("%")>0) {
            pan=ancho*(parseInt(this.ancho().replace("%",""),10)/100);
            calcular=true;
        } else {
            calcular=false;
        }
        if(calcular) {
            if(this.alto().toLocaleLowerCase().indexOf("px")>0) {
                pal=parseInt(this.alto().replace("px",""),10);
                calcular=true;
            } else if(this.alto().toLocaleLowerCase().indexOf("%")>0) {
                pan=alto*(parseInt(this.alto().replace("%",""),10)/100);
                calcular=true;
            } else {
                calcular=false;
            }
        }

        if(calcular) {
            this.x.set((ancho-pan)+"px");
            this.y.set((alto-pal)+"px");
        } else {
            this._tsv.show("No se ha podido centrar el modal, las unidades deben ser px, o %","Gestor de ventanas",'warning',4000);
        }
    }

    TraerAlFrente() {
        this._gsp.TraerAlFrente(this);
    }

    EnviarAtras() {
        this._gsp.EnviarAtras(this);
    }

    Cerrar() {
        this._gsp.DesapilarPantalla(this);
    }
}