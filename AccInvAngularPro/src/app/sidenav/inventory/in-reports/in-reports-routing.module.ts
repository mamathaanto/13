import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InRepBundlingComponent } from './in-rep-bundling/in-rep-bundling.component';
import { InRepInventoryComponent } from './in-rep-inventory/in-rep-inventory.component';
import { InRepPurchaseComponent } from './in-rep-purchase/in-rep-purchase.component';
import { InRepSalesComponent } from './in-rep-sales/in-rep-sales.component';

const routes: Routes = [
  // {path:'in-rep-purchase',component:InRepPurchaseComponent},
  // {path:'in-rep-sales',component:InRepSalesComponent},
  // {path:'in-rep-bundling',component:InRepBundlingComponent},
  // {path:'in-rep-inventory',component:InRepInventoryComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InReportsRoutingModule { }
