import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, model } from '@angular/core';
import { environment } from '@environments/environment';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {MatTabsModule} from '@angular/material/tabs';
import { NgTemplateOutlet } from '@angular/common';
import { LfvbTabComponent } from './atoms/lfvb-tab-component/lfvb-tab-component';

@Component({
  selector: 'lfvbTabs',
  imports: [
    NgTemplateOutlet,
    NzTabsModule,
    MatTabsModule
],
  templateUrl: './lfvb-tabs-component.html',
  styleUrl: './lfvb-tabs-component.less',
})
export class LfvbTabsComponent {
  @Input()
  tipoVisualizacion:string=environment.config.sdkVisualizador.tipo;

  //////////////////////////////////////////  
  //Logica de los tabs
  /////////////////////////////////////////  
  selectedTab:LfvbTabComponent|null=null;

  @Input()
  selectedTabId:any=null;

  @Output()
  onSelectedTab=new EventEmitter<any>();

  @ContentChildren(LfvbTabComponent) tabs!:QueryList<LfvbTabComponent>;

  ngAfterContentInit():void {
    if(this.tabs.length>0 && this.selectedTab==null) {
        let aux=null;
        if(this.selectedTabId) {
          aux=this.tabs.filter(x=>x.tabId==this.selectedTabId);
          aux=aux.length>0?aux[0]:this.tabs.first;
        } else {
          aux=this.tabs.first;
        }
        this.selectedTab=aux;
    }
  }

  selectTab(tab:LfvbTabComponent) {
    let aux=this.selectTab;
    this.selectedTab=tab;
    this.onSelectedTab.emit({now:this.selectTab, last:aux});
  }
}
