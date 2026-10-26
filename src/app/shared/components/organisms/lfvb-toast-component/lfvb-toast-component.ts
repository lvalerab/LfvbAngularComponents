import { Component } from '@angular/core';
import { LfvbToastService } from './services/lfvb-toast-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'LfvbToastContainer',
  imports: [NgClass],
  templateUrl: './lfvb-toast-component.html',
  styleUrl: './lfvb-toast-component.less',
})
export class LfvbToastComponent {  
  constructor(public tstService:LfvbToastService) {

  }
}
