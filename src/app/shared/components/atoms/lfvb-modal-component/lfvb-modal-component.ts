import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, model, TemplateRef, ContentChild} from '@angular/core';
import { environment } from '@environments/environment';
import { LfvbButtonComponent } from '../lfvb-button-component/lfvb-button-component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgTemplateOutlet } from '@angular/common';



@Component({
  selector: 'lfvbModal',
  imports: [
    LfvbButtonComponent,
    NzModalModule,
    NgTemplateOutlet
  ],
  templateUrl: './lfvb-modal-component.html',
  styleUrl: './lfvb-modal-component.less',
})
export class LfvbModalComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  ///////////////////////////////////////////////////////////////////////////
  //Propiedades del modal
  ///////////////////////////////////////////////////////////////////////////
  @Input()
  title:string='';

  isOpen=model(false);

  modalData=model(null);

  @Input()
  isWarm:boolean=false;

  @Input()
  isError:boolean=false;

  @Input()
  isSuccess:boolean=false;

  @Input()
  ancho:string="500px";



  clsCabecera:string="";

  @Output()
  close=new EventEmitter<any>();

  @ViewChild('modalDialog') modalDialog!: ElementRef<HTMLDialogElement>;

  ///////////////////////////////////////////////////////////////////////////
  //Templates
  ///////////////////////////////////////////////////////////////////////////
  @ContentChild('headerModalTemplate',{read:TemplateRef}) headerModalTemplate!:TemplateRef<any>;

  @ContentChild('contentModalTemplate',{read:TemplateRef}) contentModalTemplate!:TemplateRef<any>;

  @ContentChild('footerModalTemplate',{read:TemplateRef}) footerModalTemplate!:TemplateRef<any>;


  //Constructor
  constructor() {
    
  }

  ngOnChanges() {
    //debugger;
    this.clsCabecera="modal-header "
    if(this.isWarm) {
      this.clsCabecera+="modal-header-warm";
    }
    if(this.isError) {
      this.clsCabecera+="modal-header-err";
    }
    if(this.isSuccess) {
      this.clsCabecera+="modal-header-success";
    }
    if(this.modalDialog) {
      if(this.isOpen() && !this.modalDialog.nativeElement.open) {
        this.modalDialog.nativeElement.showModal();
      } else if (!this.isOpen() && this.modalDialog.nativeElement.open) {
        this.modalDialog.nativeElement.close();
      }
    }
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
