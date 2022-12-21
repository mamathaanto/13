import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InMastersComponent } from './in-masters/in-masters.component';
import { InTransactionsComponent } from './in-transactions/in-transactions.component';
import { InReportsComponent } from './in-reports/in-reports.component';
import { InMaCustomerComponent } from './in-masters/in-ma-customer/in-ma-customer.component';
import { InMaVendorComponent } from './in-masters/in-ma-vendor/in-ma-vendor.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [InventoryComponent, 
    InMastersComponent, 
    InTransactionsComponent,
     InReportsComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    HttpClientModule
  ]
})
export class InventoryModule { }
