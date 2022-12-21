import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InTransactionsRoutingModule } from './in-transactions-routing.module';
import { InTranPurchaseComponent } from './in-tran-purchase/in-tran-purchase.component';
import { InTranSalesComponent } from './in-tran-sales/in-tran-sales.component';
import { InTranOfferbundlingComponent } from './in-tran-offerbundling/in-tran-offerbundling.component';
import { InTranInventoryComponent } from './in-tran-inventory/in-tran-inventory.component';
import { InTranPurPurchaseorderComponent } from './in-tran-purchase/in-tran-pur-purchaseorder/in-tran-pur-purchaseorder.component';
import { InTranPurGrnComponent } from './in-tran-purchase/in-tran-pur-grn/in-tran-pur-grn.component';
import { InTranPurGrvComponent } from './in-tran-purchase/in-tran-pur-grv/in-tran-pur-grv.component';
import { InTranPurPurchasereturnComponent } from './in-tran-purchase/in-tran-pur-purchasereturn/in-tran-pur-purchasereturn.component';
import { InTranSalQuotationComponent } from './in-tran-sales/in-tran-sal-quotation/in-tran-sal-quotation.component';
import { InTranSalSalesorderComponent } from './in-tran-sales/in-tran-sal-salesorder/in-tran-sal-salesorder.component';
import { InTranSalDeliverynoteComponent } from './in-tran-sales/in-tran-sal-deliverynote/in-tran-sal-deliverynote.component';
import { InTranSalSalesbillingComponent } from './in-tran-sales/in-tran-sal-salesbilling/in-tran-sal-salesbilling.component';
import { InTranSalSalesreturnComponent } from './in-tran-sales/in-tran-sal-salesreturn/in-tran-sal-salesreturn.component';
import { InTranSalSecondssalesComponent } from './in-tran-sales/in-tran-sal-secondssales/in-tran-sal-secondssales.component';
import { InTranOffCreatebundleComponent } from './in-tran-offerbundling/in-tran-off-createbundle/in-tran-off-createbundle.component';
import { InTranOffBundlingComponent } from './in-tran-offerbundling/in-tran-off-bundling/in-tran-off-bundling.component';
import { InTranOffDismantlebundleComponent } from './in-tran-offerbundling/in-tran-off-dismantlebundle/in-tran-off-dismantlebundle.component';
import { InTranInStocktransferComponent } from './in-tran-inventory/in-tran-in-stocktransfer/in-tran-in-stocktransfer.component';
import { InTranInDswComponent } from './in-tran-inventory/in-tran-in-dsw/in-tran-in-dsw.component';
import { InTranInStockadjustmentComponent } from './in-tran-inventory/in-tran-in-stockadjustment/in-tran-in-stockadjustment.component';


@NgModule({
  declarations: [
    InTranPurchaseComponent,
    InTranSalesComponent,
    InTranOfferbundlingComponent,
    InTranInventoryComponent,
    InTranPurPurchaseorderComponent,
    InTranPurGrnComponent,
    InTranPurGrvComponent,
    InTranPurPurchasereturnComponent,
    InTranSalQuotationComponent,
    InTranSalSalesorderComponent,
    InTranSalDeliverynoteComponent,
    InTranSalSalesbillingComponent,
    InTranSalSalesreturnComponent,
    InTranSalSecondssalesComponent,
    InTranOffCreatebundleComponent,
    InTranOffBundlingComponent,
    InTranOffDismantlebundleComponent,
    InTranInStocktransferComponent,
    InTranInDswComponent,
    InTranInStockadjustmentComponent
  ],
  imports: [
    CommonModule,
    InTransactionsRoutingModule
  ]
})
export class InTransactionsModule { }
