import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LfvbInputComponent } from './components/atoms/lfvb-input-component/lfvb-input-component';
import { LfvbLabelComponent } from './components/atoms/lfvb-label-component/lfvb-label-component';
import { LfvbButtonComponent } from './components/atoms/lfvb-button-component/lfvb-button-component';
import { LfvbIconComponent } from './components/atoms/lfvb-icon-component/lfvb-icon-component';
import { LfvbSelectComponent } from './components/atoms/lfvb-select-component/lfvb-select-component';
import { LfvbAvatarComponent } from './components/atoms/lfvb-avatar-component/lfvb-avatar-component';
import { LfvbTabComponent } from './components/molecules/lfvb-tabs-component/atoms/lfvb-tab-component/lfvb-tab-component';
import { LfvbTabsComponent } from './components/molecules/lfvb-tabs-component/lfvb-tabs-component';
import { LfvbTableComponent } from './components/molecules/lfvb-table-component/lfvb-table-component';
import { LfvbCardComponent } from './components/molecules/lfvb-card-component/lfvb-card-component';
import { LfvbFormComponent } from './components/molecules/lfvb-form-component/lfvb-form-component';
import { LfvbFormItemComponent } from './components/molecules/lfvb-form-component/atoms/lfvb-form-item-component/lfvb-form-item-component';


@NgModule({
  declarations: [],
  imports: [    
    CommonModule,    
    LfvbAvatarComponent,
    LfvbInputComponent,
    LfvbLabelComponent,
    LfvbButtonComponent,
    LfvbIconComponent,
    LfvbSelectComponent,
    LfvbTabComponent,
    LfvbTabsComponent,
    LfvbTableComponent,
    LfvbCardComponent, 
    LfvbFormComponent,
    LfvbFormItemComponent
  ],
  exports:[
    LfvbAvatarComponent,
    LfvbInputComponent,
    LfvbLabelComponent,
    LfvbButtonComponent,
    LfvbIconComponent,
    LfvbSelectComponent,
    LfvbTabComponent,
    LfvbTabsComponent,
    LfvbTableComponent,
    LfvbCardComponent,
    LfvbFormComponent,
    LfvbFormItemComponent
  ]
})
export class SharedModule { }
