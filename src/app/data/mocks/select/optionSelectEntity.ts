export interface optionSelectEntity {
    label:string|null;
    valor:any;
}

export interface groupSelectEntity {
    label:string|null;
    opciones:optionSelectEntity[];
}