import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, model, TemplateRef, ContentChild, WritableSignal, signal} from '@angular/core';
import { environment } from '@environments/environment';
import { LfvbButtonComponent } from '../lfvb-button-component/lfvb-button-component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { LfvbDialogType } from './enum/lfvb-dialog-type';
import { LfvbPantallaModel } from '../../models/lfvb-pantallas/lfvb-pantalla-model';
import { toObservable } from '@angular/core/rxjs-interop';




@Component({
  selector: 'LfvbDialog',
  imports: [NgClass, NgTemplateOutlet,NzModalModule],
  templateUrl: './lfvb-dialog-component.html',
  styleUrl: './lfvb-dialog-component.less',
})
export class LfvbDialogComponent extends LfvbPantallaModel {
@Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ///////////////////////////////////////////////////////////////////////////
  //Propiedades del modal
  ///////////////////////////////////////////////////////////////////////////
  @Input()
  title:string='';

  isOpen=model(false);

  OnCuandoCambiaEstado=toObservable(this.isOpen);

  modalData=model(null);

  @Input()
  tipo:LfvbDialogType='default';
 
  
  
  override minimizada=model(false);    

  
  override maximizada=model(false);

  
  override modal=model(false);

  
  override x=model("0px");
    
  
  override y=model("0px");

  
  override alto=model("200px");

  
  override ancho=model("300px");

  @Input()
  centrar:boolean=false;


  clsCabecera:string="";

  @Output()
  close=new EventEmitter<any>();

  @ViewChild('modalDialog') modalDialog!: ElementRef<HTMLDialogElement>;

  ///////////////////////////////////////////////////////////////////////////
  //Templates
  ///////////////////////////////////////////////////////////////////////////
  @ContentChild('headerTemplate',{read:TemplateRef}) headerTemplate!:TemplateRef<any>;

  @ContentChild('contentTemplate',{read:TemplateRef}) contentTemplate!:TemplateRef<any>;


  //Constructor
  constructor() {
    super(false); //No es un modal
    this.OnCuandoCambiaEstado.subscribe((open)=>{
      if(open && this.centrar) {
        this.CentrarPantalla();
      }
    });
  }

  ngOnChanges() {
    //debugger;
    this.clsCabecera="modal-header "   
    if(this.modalDialog) {
      if(this.isOpen() && !this.modalDialog.nativeElement.open) {
        this.modalDialog.nativeElement.showModal();
      } else if (!this.isOpen() && this.modalDialog.nativeElement.open) {
        this.modalDialog.nativeElement.close();
      }
    }
  }

  onMinimize() {
    this.minimizada.set(true);
    this.maximizada.set(false);
  }

  onMaximize() {
    this.minimizada.set(false);
    this.maximizada.set(true);
  }

  onVentana() {
    this.minimizada.set(false);
    this.maximizada.set(false);
  }

  onClose(res:any) {
    debugger;
    this.isOpen.set(false);    
    this.close.emit({
      modalData:this.modalData(),
      data:res
    });
  }

  onBackdropClick(event:MouseEvent) {
    const rect = this.modalDialog.nativeElement.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom &&
      rect.left <= event.clientX &&
      event.clientX <= rect.right
    );
    if (!isInDialog) {
      this.onClose({
        modalData:this.modalData(),
        res:null
      });
    }
  }

}
