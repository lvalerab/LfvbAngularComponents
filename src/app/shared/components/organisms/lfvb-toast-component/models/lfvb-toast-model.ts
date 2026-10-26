export type LfvbToastType='success'|'error'|'info'|'warning';

export interface LfvbToast {
    id:string;
    titulo?:string;
    message:string;
    type:LfvbToastType;
    duration?:number;
    closing?:boolean;
    img?:string;
    clsImg?:string;
}