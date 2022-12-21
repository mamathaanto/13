import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InTranInventoryComponent } from './in-tran-inventory/in-tran-inventory.component';
import { InTranOfferbundlingComponent } from './in-tran-offerbundling/in-tran-offerbundling.component';
import { InTranPurchaseComponent } from './in-tran-purchase/in-tran-purchase.component';
import { InTranSalesComponent } from './in-tran-sales/in-tran-sales.component';

const routes: Routes = [
  // {path:'in-tran-purchase',component:InTranPurchaseComponent},
  // {path:'in-tran-sales',component:InTranSalesComponent},
  // {path:'in-tran-offerbundling',component:InTranOfferbundlingComponent},
  // {path:'in-tran-inventory',component:InTranInventoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InTransactionsRoutingModule { }
