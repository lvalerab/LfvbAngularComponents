import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LfvbInputComponent } from './components/atoms/lfvb-input-component/lfvb-input-component';
import { LfvbLabelComponent } from './components/atoms/lfvb-label-component/lfvb-label-component';
import { LfvbButtonComponent } from './components/atoms/lfvb-button-component/lfvb-button-component';
import { LfvbIconComponent } from './components/atoms/lfvb-icon-component/lfvb-icon-component';
import { LfvbSelectComponent } from './components/atoms/lfvb-select-component/lfvb-select-component';
import { LfvbAvatarComponent } from './components/atoms/lfvb-avatar-component/lfvb-avatar-component';


@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    LfvbAvatarComponent,
    LfvbInputComponent,
    LfvbLabelComponent,
    LfvbButtonComponent,
    LfvbIconComponent,
    LfvbSelectComponent
  ],
  exports:[
    LfvbAvatarComponent,
    LfvbInputComponent,
    LfvbLabelComponent,
    LfvbButtonComponent,
    LfvbIconComponent,
    LfvbSelectComponent
  ]
})
export class SharedModule { }
