import { Injectable, WritableSignal, signal } from "@angular/core";
import { LfvbPantallaModel } from "@app/shared/components/models/lfvb-pantallas/lfvb-pantalla-model";


@Injectable({
    providedIn:'root'
})
export class GestorPantallasServices {
    /////////////////////////////////////////////////////////////////////////
    //Pila de pantalla
    /////////////////////////////////////////////////////////////////////////
    private _pila={
        dialogos:signal<LfvbPantallaModel[]>([]),
        modales:signal<LfvbPantallaModel[]>([])
    }
    readonly pDialogos=this._pila.dialogos.asReadonly();
    readonly pModales=this._pila.dialogos.asReadonly();

    private _zIndex={
        dialog:signal<number>(1000),
        modal:signal<number>(2000),
    };

    ApilarPantalla(pantalla:LfvbPantallaModel) {
        if(pantalla.modal()) {
            //Apilo un modal
            this._zIndex.modal.update((z)=>z+10); //Por cada pantalla reservo 10 indices
            pantalla.zIndex.set(this._zIndex.modal());
            this._pila.modales.update((pl)=>[...pl,pantalla]);
        } else {
            //Apilo un dialgo            
            this._zIndex.dialog.update((z)=>z+10); //Por cada pantalla reservo 10 indices
            pantalla.zIndex.set(this._zIndex.dialog());
            this._pila.dialogos.update((pl)=>[...pl,pantalla]);
        }
    }

    DesapilarPantalla(pantalla:LfvbPantallaModel) {
        //Buscamos la pantalla
        var p=pantalla.modal()?this._pila.modales().filter(p=>p.id()===pantalla.id()):this._pila.dialogos().filter(p=>p.id()===pantalla.id());
        if(p!=null) {
            //Quitamos la pantalla
            if(pantalla.modal()) {
                this._pila.modales.update((modal)=>modal.filter(p=>p.id()!==pantalla.id()));
                //Actualizamos toda la pila, para que zIndex, se disminulla en 10
                this._pila.modales.update((mdl)=>{
                    mdl.forEach((d,i,t)=>{
                        if(d.id()!==pantalla.id() && d.zIndex()>pantalla.zIndex()) {
                            d.zIndex.update(v=>v-10);
                        }
                    })  
                    return mdl;
                });
                if(pantalla.zIndex()==this._zIndex.modal()) {
                    this._zIndex.modal.update(v=>v-10);
                }
            } else {
                this._pila.dialogos.update((dlg)=>dlg.filter(p=>p.id()!==pantalla.id()));
                //Actualizamos toda la pila, para que zIndex, se disminulla en 10
                this._pila.dialogos.update((dlg)=>{
                    dlg.forEach((d,i,t)=>{
                        if(d.id()!==pantalla.id() && d.zIndex()>pantalla.zIndex()) {
                            d.zIndex.update(v=>v-10);
                        }
                    })  
                    return dlg;
                });
                if(pantalla.zIndex()==this._zIndex.dialog()) {
                    this._zIndex.dialog.update(v=>v-10);
                }
            }
        }
    }

    TraerAlFrente(pantalla:LfvbPantallaModel) {
        if(pantalla.modal()) {
            throw "[LFVB-GEST-PANT ERR:001M] Un modal no se puede modificar";
        } else {
            //Actaulizamos las pantallas, para rebajarle el zIndex
            this._pila.dialogos.update((dlg)=>{
                dlg.forEach((d,i,t)=>{
                    if(d.id()!==pantalla.id() && d.zIndex()>pantalla.zIndex()) {
                        d.zIndex.update(v=>v-10);
                    }
                })  
                return dlg;
            });
            //Ponemos el zIndex de la pila al tope
            pantalla.zIndex.update(z=>this._zIndex.dialog());
        }
    }

    EnviarAtras(pantalla:LfvbPantallaModel) {
        if(pantalla.modal()) {
            throw "[LFVB-GEST-PANT ERR:001M] Un modal no se puede modificar";
        } else {
            var min=this._zIndex.dialog();
            //Actaulizamos las pantallas, para rebajarle el zIndex
            this._pila.dialogos.update((dlg)=>{
                dlg.forEach((d,i,t)=>{
                    if(d.id()!==pantalla.id() && d.zIndex()<pantalla.zIndex()) {
                        if(min>d.zIndex()) {
                            min=d.zIndex()
                        }
                        d.zIndex.update(v=>v+10); //Lo subimos
                    }
                })  
                return dlg;
            });
            //Ponemos el zIndex de la pila al tope
            pantalla.zIndex.update(z=>min);
        }
    }
}