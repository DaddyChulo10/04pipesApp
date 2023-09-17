import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports:[
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    FieldsetModule,
    PanelModule
    // CardModule,

  ]
})
export class PrimeNgModule { }
