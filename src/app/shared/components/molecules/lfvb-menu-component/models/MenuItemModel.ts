export interface MenuItemModel {
    label:string;
    icon:string|null;
    action:any;
    routerLink:string|null;
    
    items:MenuItemModel[]|null;
}