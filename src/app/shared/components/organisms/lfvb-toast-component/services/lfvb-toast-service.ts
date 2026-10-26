import {Injectable, signal} from '@angular/core';
import { LfvbToast, LfvbToastType } from '../models/lfvb-toast-model';

@Injectable({
    providedIn:'root'
})
export class LfvbToastService {
    //Listado de mensajes
    private _mensages=signal<LfvbToast[]>([]);
    readonly mensages=this._mensages.asReadonly();
    duracionAnimacion:number=300;




    show(mensaje:string, titulo:string='', type:LfvbToastType='info', duration:number=4000, img:string='', clsImg:string='') {
        const id = Math.random().toString(36).substring(2, 9);
        const newToastMensaje:LfvbToast={
            id:id,
            type:type,
            message:mensaje,
            titulo:titulo,
            duration:duration,
            closing:false,
            img:img!=''?img:undefined,
            clsImg:clsImg!=''?clsImg:undefined
        };

        this._mensages.update((current)=>[...current,newToastMensaje]);

        if(duration>0) {
            setTimeout(()=>{
                this.startClose(id);
            },duration);
        }
    }

    startClose(id:string) {
        this._mensages.update((current)=>
                current.map((msg)=>msg.id===id?{...msg,closing:true}:msg)
        );

        setTimeout(()=>{
            this.remove(id);
        },this.duracionAnimacion);
    }

    remove(id:string) {
        this._mensages.update((current)=>current.filter((msg)=>msg.id!==id));
    }

}

