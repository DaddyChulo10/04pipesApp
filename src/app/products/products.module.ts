import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

// import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

import { ToggleCasePipe } from './pages/pipes/toggle-case.pipe';
import { CanFlyPipe } from './pages/pipes/can-fly.pipe';
import { SortByPipe } from './pages/pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    TableModule
    // PrimeNgModule
  ]
})
export class ProductsModule { }
