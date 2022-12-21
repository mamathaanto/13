import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InReportsRoutingModule } from './in-reports-routing.module';
import { InRepPurchaseComponent } from './in-rep-purchase/in-rep-purchase.component';
import { InRepSalesComponent } from './in-rep-sales/in-rep-sales.component';
import { InRepBundlingComponent } from './in-rep-bundling/in-rep-bundling.component';
import { InRepInventoryComponent } from './in-rep-inventory/in-rep-inventory.component';
import { InRepPurPurchaseorderComponent } from './in-rep-purchase/in-rep-pur-purchaseorder/in-rep-pur-purchaseorder.component';
import { InRepPurGrnComponent } from './in-rep-purchase/in-rep-pur-grn/in-rep-pur-grn.component';
import { InRepPurPurchasereturnComponent } from './in-rep-purchase/in-rep-pur-purchasereturn/in-rep-pur-purchasereturn.component';
import { InRepSalSalesorderComponent } from './in-rep-sales/in-rep-sal-salesorder/in-rep-sal-salesorder.component';
import { InRepSalDeliverynoteComponent } from './in-rep-sales/in-rep-sal-deliverynote/in-rep-sal-deliverynote.component';
import { InRepSalSalesComponent } from './in-rep-sales/in-rep-sal-sales/in-rep-sal-sales.component';
import { InRepSalSalesreturnComponent } from './in-rep-sales/in-rep-sal-salesreturn/in-rep-sal-salesreturn.component';
import { InRepSalSecondssalesComponent } from './in-rep-sales/in-rep-sal-secondssales/in-rep-sal-secondssales.component';
import { InRepBunBundleitemsComponent } from './in-rep-bundling/in-rep-bun-bundleitems/in-rep-bun-bundleitems.component';
import { InRepBunBundlesalesComponent } from './in-rep-bundling/in-rep-bun-bundlesales/in-rep-bun-bundlesales.component';
import { InRepBunAnalysisComponent } from './in-rep-bundling/in-rep-bun-analysis/in-rep-bun-analysis.component';
import { InRepInStockreportComponent } from './in-rep-inventory/in-rep-in-stockreport/in-rep-in-stockreport.component';
import { InRepInStockregisterComponent } from './in-rep-inventory/in-rep-in-stockregister/in-rep-in-stockregister.component';
import { InRepInSmaComponent } from './in-rep-inventory/in-rep-in-sma/in-rep-in-sma.component';
import { InRepInDamagestockComponent } from './in-rep-inventory/in-rep-in-damagestock/in-rep-in-damagestock.component';
import { InRepInStocktransferComponent } from './in-rep-inventory/in-rep-in-stocktransfer/in-rep-in-stocktransfer.component';
import { InRepInStockadjustmentComponent } from './in-rep-inventory/in-rep-in-stockadjustment/in-rep-in-stockadjustment.component';
import { InRepInReorderlistComponent } from './in-rep-inventory/in-rep-in-reorderlist/in-rep-in-reorderlist.component';
import { InRepInIarComponent } from './in-rep-inventory/in-rep-in-iar/in-rep-in-iar.component';
import { InRepInExpireditemsComponent } from './in-rep-inventory/in-rep-in-expireditems/in-rep-in-expireditems.component';


@NgModule({
  declarations: [
    InRepPurchaseComponent,
    InRepSalesComponent,
    InRepBundlingComponent,
    InRepInventoryComponent,
    InRepPurPurchaseorderComponent,
    InRepPurGrnComponent,
    InRepPurPurchasereturnComponent,
    InRepSalSalesorderComponent,
    InRepSalDeliverynoteComponent,
    InRepSalSalesComponent,
    InRepSalSalesreturnComponent,
    InRepSalSecondssalesComponent,
    InRepBunBundleitemsComponent,
    InRepBunBundlesalesComponent,
    InRepBunAnalysisComponent,
    InRepInStockreportComponent,
    InRepInStockregisterComponent,
    InRepInSmaComponent,
    InRepInDamagestockComponent,
    InRepInStocktransferComponent,
    InRepInStockadjustmentComponent,
    InRepInReorderlistComponent,
    InRepInIarComponent,
    InRepInExpireditemsComponent
  ],
  imports: [
    CommonModule,
    InReportsRoutingModule
  ]
})
export class InReportsModule { }
