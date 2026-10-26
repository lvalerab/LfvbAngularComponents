import { signal, inject } from "@angular/core";
import { GestorPantallasServices } from "@app/shared/services/pantallas/GestorPantallasServices";

export class LfvbPantallaModel {

    private _gsp=inject(GestorPantallasServices);
    
    private _id=signal<string>("");
    readonly id=this._id.asReadonly();

    zIndex=signal<number>(0);

    minimizada=signal<boolean>(false);    
    maximizada=signal<boolean>(false);
    modal=signal<boolean>(false);
    x=signal<number>(0);
    y=signal<number>(0);
    alto=signal<number>(0);
    ancho=signal<number>(0);
    
    constructor(modal:boolean,
                x:number,
                y:number,
                alto:number,
                ancho:number) {
        const id = Math.random().toString(36).substring(2, 9);
        this._id.set(id);
        this.modal.set(modal);
        this.x.set(x);
        this.y.set(y);
        this.alto.set(alto);
        this.ancho.set(ancho);
        this._gsp.ApilarPantalla(this); //Gestionamos el apilamiento de la pantalla        
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