import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcMaAccountgroupComponent } from './sidenav/accounts/ac-masters/ac-ma-accountgroup/ac-ma-accountgroup.component';
import { AcMaAccountsubtypeComponent } from './sidenav/accounts/ac-masters/ac-ma-accountsubtype/ac-ma-accountsubtype.component';
import { AcMaAccounttypeComponent } from './sidenav/accounts/ac-masters/ac-ma-accounttype/ac-ma-accounttype.component';
import { AcRepBalancesheetComponent } from './sidenav/accounts/ac-reports/ac-rep-balancesheet/ac-rep-balancesheet.component';
import { AcRepBankbookComponent } from './sidenav/accounts/ac-reports/ac-rep-bankbook/ac-rep-bankbook.component';
import { AcRepCashbookComponent } from './sidenav/accounts/ac-reports/ac-rep-cashbook/ac-rep-cashbook.component';
import { AcRepCustomersupplierarComponent } from './sidenav/accounts/ac-reports/ac-rep-customersupplierar/ac-rep-customersupplierar.component';
import { AcRepIncomeexpensesComponent } from './sidenav/accounts/ac-reports/ac-rep-incomeexpenses/ac-rep-incomeexpenses.component';
import { AcRepIncomestatementComponent } from './sidenav/accounts/ac-reports/ac-rep-incomestatement/ac-rep-incomestatement.component';
import { AcRepLedgersComponent } from './sidenav/accounts/ac-reports/ac-rep-ledgers/ac-rep-ledgers.component';
import { AcRepPettycashComponent } from './sidenav/accounts/ac-reports/ac-rep-pettycash/ac-rep-pettycash.component';
import { AcRepProfitlossComponent } from './sidenav/accounts/ac-reports/ac-rep-profitloss/ac-rep-profitloss.component';
import { AcRepTrialbalanceComponent } from './sidenav/accounts/ac-reports/ac-rep-trialbalance/ac-rep-trialbalance.component';
import { AcTranBankreconciliationComponent } from './sidenav/accounts/ac-transactions/ac-tran-bankreconciliation/ac-tran-bankreconciliation.component';
import { AcTranContraentryComponent } from './sidenav/accounts/ac-transactions/ac-tran-contraentry/ac-tran-contraentry.component';
import { AcTranCreditnoteComponent } from './sidenav/accounts/ac-transactions/ac-tran-creditnote/ac-tran-creditnote.component';
import { AcTranDebitnoteComponent } from './sidenav/accounts/ac-transactions/ac-tran-debitnote/ac-tran-debitnote.component';
import { AcTranJournalentryComponent } from './sidenav/accounts/ac-transactions/ac-tran-journalentry/ac-tran-journalentry.component';
import { AcTranPaymentsvoucherComponent } from './sidenav/accounts/ac-transactions/ac-tran-paymentsvoucher/ac-tran-paymentsvoucher.component';
import { AcTranPdcstatusupdationComponent } from './sidenav/accounts/ac-transactions/ac-tran-pdcstatusupdation/ac-tran-pdcstatusupdation.component';
import { AcTranPettycashvoucherComponent } from './sidenav/accounts/ac-transactions/ac-tran-pettycashvoucher/ac-tran-pettycashvoucher.component';
import { AcTranReceiptpaymentallocationComponent } from './sidenav/accounts/ac-transactions/ac-tran-receiptpaymentallocation/ac-tran-receiptpaymentallocation.component';
import { AcTranReceiptsvoucherComponent } from './sidenav/accounts/ac-transactions/ac-tran-receiptsvoucher/ac-tran-receiptsvoucher.component';
import { AcUtiAobComponent } from './sidenav/accounts/ac-utilities/ac-uti-aob/ac-uti-aob.component';
import { AcUtiApvComponent } from './sidenav/accounts/ac-utilities/ac-uti-apv/ac-uti-apv.component';
import { AcUtiDatabackupComponent } from './sidenav/accounts/ac-utilities/ac-uti-databackup/ac-uti-databackup.component';
import { AcUtiPybfComponent } from './sidenav/accounts/ac-utilities/ac-uti-pybf/ac-uti-pybf.component';
import { AcUtiSobComponent } from './sidenav/accounts/ac-utilities/ac-uti-sob/ac-uti-sob.component';
import { AcUtiStockupdateComponent } from './sidenav/accounts/ac-utilities/ac-uti-stockupdate/ac-uti-stockupdate.component';
import { AcUtiYearendprocessComponent } from './sidenav/accounts/ac-utilities/ac-uti-yearendprocess/ac-uti-yearendprocess.component';
import { AccountsComponent } from './sidenav/accounts/accounts.component';
import { AdministrationComponent } from './sidenav/administration/administration.component';
import { BranchComponent } from './sidenav/administration/branch/branch.component';
import { CompanyregistrationComponent } from './sidenav/administration/companyregistration/companyregistration.component';
import { SettingsComponent } from './sidenav/administration/settings/settings.component';
import { UsermanagementComponent } from './sidenav/administration/usermanagement/usermanagement.component';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { InMaCustomerComponent } from './sidenav/inventory/in-masters/in-ma-customer/in-ma-customer.component';
import { InMaMatCategoryComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-category/in-ma-mat-category.component';
import { InMaMatItemmasterComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-itemmaster/in-ma-mat-itemmaster.component';
import { InMaMatTaxComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-tax/in-ma-mat-tax.component';
import { ShowTaxComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-tax/show-tax/show-tax.component';
import { AddEditTaxComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-tax/add-edit-tax/add-edit-tax.component';
import { InMaMatUnitComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-unit/in-ma-mat-unit.component';
import { InMaVendorComponent } from './sidenav/inventory/in-masters/in-ma-vendor/in-ma-vendor.component';
import { InRepBunAnalysisComponent } from './sidenav/inventory/in-reports/in-rep-bundling/in-rep-bun-analysis/in-rep-bun-analysis.component';
import { InRepBunBundleitemsComponent } from './sidenav/inventory/in-reports/in-rep-bundling/in-rep-bun-bundleitems/in-rep-bun-bundleitems.component';
import { InRepBunBundlesalesComponent } from './sidenav/inventory/in-reports/in-rep-bundling/in-rep-bun-bundlesales/in-rep-bun-bundlesales.component';
import { InRepInDamagestockComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-damagestock/in-rep-in-damagestock.component';
import { InRepInExpireditemsComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-expireditems/in-rep-in-expireditems.component';
import { InRepInIarComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-iar/in-rep-in-iar.component';
import { InRepInReorderlistComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-reorderlist/in-rep-in-reorderlist.component';
import { InRepInSmaComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-sma/in-rep-in-sma.component';
import { InRepInStockadjustmentComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-stockadjustment/in-rep-in-stockadjustment.component';
import { InRepInStockregisterComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-stockregister/in-rep-in-stockregister.component';
import { InRepInStockreportComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-stockreport/in-rep-in-stockreport.component';
import { InRepInStocktransferComponent } from './sidenav/inventory/in-reports/in-rep-inventory/in-rep-in-stocktransfer/in-rep-in-stocktransfer.component';
import { InRepPurGrnComponent } from './sidenav/inventory/in-reports/in-rep-purchase/in-rep-pur-grn/in-rep-pur-grn.component';
import { InRepPurPurchaseorderComponent } from './sidenav/inventory/in-reports/in-rep-purchase/in-rep-pur-purchaseorder/in-rep-pur-purchaseorder.component';
import { InRepPurPurchasereturnComponent } from './sidenav/inventory/in-reports/in-rep-purchase/in-rep-pur-purchasereturn/in-rep-pur-purchasereturn.component';
import { InRepSalDeliverynoteComponent } from './sidenav/inventory/in-reports/in-rep-sales/in-rep-sal-deliverynote/in-rep-sal-deliverynote.component';
import { InRepSalSalesComponent } from './sidenav/inventory/in-reports/in-rep-sales/in-rep-sal-sales/in-rep-sal-sales.component';
import { InRepSalSalesorderComponent } from './sidenav/inventory/in-reports/in-rep-sales/in-rep-sal-salesorder/in-rep-sal-salesorder.component';
import { InRepSalSalesreturnComponent } from './sidenav/inventory/in-reports/in-rep-sales/in-rep-sal-salesreturn/in-rep-sal-salesreturn.component';
import { InRepSalSecondssalesComponent } from './sidenav/inventory/in-reports/in-rep-sales/in-rep-sal-secondssales/in-rep-sal-secondssales.component';
import { InTranInDswComponent } from './sidenav/inventory/in-transactions/in-tran-inventory/in-tran-in-dsw/in-tran-in-dsw.component';
import { InTranInStockadjustmentComponent } from './sidenav/inventory/in-transactions/in-tran-inventory/in-tran-in-stockadjustment/in-tran-in-stockadjustment.component';
import { InTranInStocktransferComponent } from './sidenav/inventory/in-transactions/in-tran-inventory/in-tran-in-stocktransfer/in-tran-in-stocktransfer.component';
import { InTranOffBundlingComponent } from './sidenav/inventory/in-transactions/in-tran-offerbundling/in-tran-off-bundling/in-tran-off-bundling.component';
import { InTranOffCreatebundleComponent } from './sidenav/inventory/in-transactions/in-tran-offerbundling/in-tran-off-createbundle/in-tran-off-createbundle.component';
import { InTranOffDismantlebundleComponent } from './sidenav/inventory/in-transactions/in-tran-offerbundling/in-tran-off-dismantlebundle/in-tran-off-dismantlebundle.component';
import { InTranPurGrnComponent } from './sidenav/inventory/in-transactions/in-tran-purchase/in-tran-pur-grn/in-tran-pur-grn.component';
import { InTranPurGrvComponent } from './sidenav/inventory/in-transactions/in-tran-purchase/in-tran-pur-grv/in-tran-pur-grv.component';
import { InTranPurPurchaseorderComponent } from './sidenav/inventory/in-transactions/in-tran-purchase/in-tran-pur-purchaseorder/in-tran-pur-purchaseorder.component';
import { InTranPurPurchasereturnComponent } from './sidenav/inventory/in-transactions/in-tran-purchase/in-tran-pur-purchasereturn/in-tran-pur-purchasereturn.component';
import { InTranSalDeliverynoteComponent } from './sidenav/inventory/in-transactions/in-tran-sales/in-tran-sal-deliverynote/in-tran-sal-deliverynote.component';
import { InTranSalQuotationComponent } from './sidenav/inventory/in-transactions/in-tran-sales/in-tran-sal-quotation/in-tran-sal-quotation.component';
import { InTranSalSalesbillingComponent } from './sidenav/inventory/in-transactions/in-tran-sales/in-tran-sal-salesbilling/in-tran-sal-salesbilling.component';
import { InTranSalSalesorderComponent } from './sidenav/inventory/in-transactions/in-tran-sales/in-tran-sal-salesorder/in-tran-sal-salesorder.component';
import { InTranSalSalesreturnComponent } from './sidenav/inventory/in-transactions/in-tran-sales/in-tran-sal-salesreturn/in-tran-sal-salesreturn.component';
import { InTranSalSecondssalesComponent } from './sidenav/inventory/in-transactions/in-tran-sales/in-tran-sal-secondssales/in-tran-sal-secondssales.component';
import { InventoryComponent } from './sidenav/inventory/inventory.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolsComponent } from './sidenav/tools/tools.component';
import { AddEditAcsubtypeComponent } from './sidenav/accounts/ac-masters/ac-ma-accountsubtype/add-edit-acsubtype/add-edit-acsubtype.component';
import { ShowAcsubtypeComponent } from './sidenav/accounts/ac-masters/ac-ma-accountsubtype/show-acsubtype/show-acsubtype.component';
import { AddEditUnitComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-unit/add-edit-unit/add-edit-unit.component';
import { ShowUnitComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-unit/show-unit/show-unit.component';
import { AddEditAccgroupComponent } from './sidenav/accounts/ac-masters/ac-ma-accountgroup/add-edit-accgroup/add-edit-accgroup.component';
import { ShowAccgroupComponent } from './sidenav/accounts/ac-masters/ac-ma-accountgroup/show-accgroup/show-accgroup.component';
import { AcMaChartofaccountComponent } from './sidenav/accounts/ac-masters/ac-ma-chartofaccount/ac-ma-chartofaccount.component';
import { AddEditChartofaccountComponent } from './sidenav/accounts/ac-masters/ac-ma-chartofaccount/add-edit-chartofaccount/add-edit-chartofaccount.component';
import { ShowChartofaccountComponent } from './sidenav/accounts/ac-masters/ac-ma-chartofaccount/show-chartofaccount/show-chartofaccount.component';
import { ShowActypeComponent } from './sidenav/accounts/ac-masters/ac-ma-accounttype/show-actype/show-actype.component';

const routes: Routes = [{path:'dashboard', component:DashboardComponent},
// {path:'administration', component:AdministrationComponent},
{path:'administration/branch', component:BranchComponent},
{path:'administration/companyregistration', component:CompanyregistrationComponent},
{path:'administration/settings', component:SettingsComponent},
{path:'administration/usermanagement', component:UsermanagementComponent},
{path:'inventory',
loadChildren:()=>import('./sidenav/inventory/inventory.module').then(m => m.InventoryModule)},
{path:'inventory/in-ma-customer',component:InMaCustomerComponent},
{path:'inventory/in-ma-vendor',component:InMaVendorComponent},
{path:'inventory',
loadChildren:()=>import('./sidenav/inventory/in-masters/in-masters.module').then(m=>m.InMastersModule)},
{path:'inventory/in-ma-mat-category',component:InMaMatCategoryComponent},
{path:'inventory/in-ma-mat-tax',component:InMaMatTaxComponent},
{path:'inventory/show-tax',component:ShowTaxComponent},
{path:'inventory/add-edit-tax',component:AddEditTaxComponent},


{path:'inventory/in-ma-mat-unit',component:InMaMatUnitComponent},
{path:'in-ma-mat-unit/add-edit-unit',component:AddEditUnitComponent},
{path:'in-ma-mat-unit/show-unit',component:ShowUnitComponent},
{path:'inventory/in-ma-mat-itemmaster',component:InMaMatItemmasterComponent},
{path:'inventory',
loadChildren:()=> import('./sidenav/inventory/in-transactions/in-transactions.module').then(m=>m.InTransactionsModule)},
{path:'inventory/in-tran-pur-purchaseorder',component:InTranPurPurchaseorderComponent},
{path:'inventory/in-tran-pur-grn',component:InTranPurGrnComponent},
{path:'inventory/in-tran-pur-grv',component:InTranPurGrvComponent},
{path:'inventory/in-tran-pur-purchasereturn',component:InTranPurPurchasereturnComponent},
{path:'inventory/in-tran-sal-quotation',component:InTranSalQuotationComponent},
{path:'inventory/in-tran-sal-salesorder',component:InTranSalSalesorderComponent},
{path:'inventory/in-tran-sal-deliverynote',component:InTranSalDeliverynoteComponent},
{path:'inventory/in-tran-sal-salesbilling',component:InTranSalSalesbillingComponent},
{path:'inventory/in-tran-sal-salesreturn',component:InTranSalSalesreturnComponent},
{path:'inventory/in-tran-sal-secondssales',component:InTranSalSecondssalesComponent},
{path:'inventory/in-tran-off-createbundle',component:InTranOffCreatebundleComponent},
{path:'inventory/in-tran-off-bundling',component:InTranOffBundlingComponent},
{path:'inventory/in-tran-off-dismantlebundle',component:InTranOffDismantlebundleComponent},
{path:'inventory/in-tran-in-stocktransfer',component:InTranInStocktransferComponent},
{path:'inventory/in-tran-in-dsw',component:InTranInDswComponent},
{path:'inventory/in-tran-in-stockadjustment',component:InTranInStockadjustmentComponent},
{path:'inventory',
loadChildren:()=> import('./sidenav/inventory/in-reports/in-reports.module').then(m=>m.InReportsModule)},
{path:'inventory/in-rep-pur-purchaseorder',component:InRepPurPurchaseorderComponent},
{path:'inventory/in-rep-pur-grn',component:InRepPurGrnComponent},
{path:'inventory/in-rep-pur-purchasereturn',component:InRepPurPurchasereturnComponent},
{path:'inventory/in-rep-sal-salesorder',component:InRepSalSalesorderComponent},
{path:'inventory/in-rep-sal-deliverynote',component:InRepSalDeliverynoteComponent},
{path:'inventory/in-rep-sal-sales',component:InRepSalSalesComponent},
{path:'inventory/in-rep-sal-salesreturn',component:InRepSalSalesreturnComponent},
{path:'inventory/in-rep-sal-secondssales',component:InRepSalSecondssalesComponent},
{path:'inventory/in-rep-bun-bundleitems',component:InRepBunBundleitemsComponent},
{path:'inventory/in-rep-bun-bundlesales',component:InRepBunBundlesalesComponent},
{path:'inventory/in-rep-bun-analysis',component:InRepBunAnalysisComponent},
{path:'inventory/in-rep-in-stockreport',component:InRepInStockreportComponent},
{path:'inventory/in-rep-in-stockregister',component:InRepInStockregisterComponent},
{path:'inventory/in-rep-in-sma',component:InRepInSmaComponent},
{path:'inventory/in-rep-in-damagestock',component:InRepInDamagestockComponent},
{path:'inventory/in-rep-in-stocktransfer',component:InRepInStocktransferComponent},
{path:'inventory/in-rep-in-stockadjustment',component:InRepInStockadjustmentComponent},
{path:'inventory/in-rep-in-reorderlist',component:InRepInReorderlistComponent},
{path:'inventory/in-rep-in-iar',component:InRepInIarComponent},
{path:'inventory/in-rep-in-expireditems',component:InRepInExpireditemsComponent},
{path:'accounts',
loadChildren:()=>import('./sidenav/accounts/accounts.module').then(m=>m.AccountsModule)},
{path:'ac-ma-accountgroup',component:AcMaAccountgroupComponent},
{path:'accounts/add-edit-acsubtype',component:AddEditAcsubtypeComponent},
{path:'accounts/show-acsubtype',component:ShowAcsubtypeComponent},

{path:'accounts/add-edit-accgroup',component:AddEditAccgroupComponent},
{path:'accounts/show-accgroup',component:ShowAccgroupComponent},

{path:'ac-ma-accountsubtype',component:AcMaAccountsubtypeComponent},
{path:'accounts/ac-ma-chartofaccount',component:AcMaChartofaccountComponent},
{path:'accounts/add-edit-chartofaccount',component:AddEditChartofaccountComponent},
{path:'accounts/show-chartofaccount',component:ShowChartofaccountComponent},


 {path:'accounts/ac-ma-accounttype',component:AcMaAccounttypeComponent},
{path:'accounts/ac-rep-balancesheet',component:AcRepBalancesheetComponent},
{path:'accounts/ac-rep-bankbook',component:AcRepBankbookComponent},
{path:'accounts/ac-rep-cashbook',component:AcRepCashbookComponent},
{path:'accounts/ac-rep-customersupplierar',component:AcRepCustomersupplierarComponent},
{path:'accounts/ac-rep-incomeexpenses',component:AcRepIncomeexpensesComponent},
{path:'accounts/ac-rep-incomestatement',component:AcRepIncomestatementComponent},
{path:'accounts/ac-rep-ledgers',component:AcRepLedgersComponent},
{path:'accounts/ac-rep-pettycash',component:AcRepPettycashComponent},
{path:'accounts/ac-rep-profitloss',component:AcRepProfitlossComponent},
{path:'accounts/ac-rep-trialbalance',component:AcRepTrialbalanceComponent},

{path:'accounts/ac-tran-bankreconciliation',component:AcTranBankreconciliationComponent},
{path:'accounts/ac-tran-contraentry',component:AcTranContraentryComponent},
{path:'accounts/ac-tran-creditnote',component:AcTranCreditnoteComponent},
{path:'accounts/ac-tran-debitnote',component:AcTranDebitnoteComponent},
{path:'accounts/ac-tran-journalentry',component:AcTranJournalentryComponent},
{path:'accounts/ac-tran-paymentsvoucher',component:AcTranPaymentsvoucherComponent},
{path:'accounts/ac-tran-pdcstatusupdation',component:AcTranPdcstatusupdationComponent},
{path:'accounts/ac-tran-pettycashvoucher',component:AcTranPettycashvoucherComponent},
{path:'accounts/ac-tran-receiptpaymentallocation',component:AcTranReceiptpaymentallocationComponent},
{path:'accounts/ac-tran-receiptsvoucher',component:AcTranReceiptsvoucherComponent},

{path:'accounts/ac-uti-aob',component:AcUtiAobComponent},
{path:'accounts/ac-uti-apv',component:AcUtiApvComponent},
{path:'accounts/ac-uti-databackup',component:AcUtiDatabackupComponent},
{path:'accounts/ac-uti-pybf',component:AcUtiPybfComponent},
{path:'accounts/ac-uti-sob',component:AcUtiSobComponent},
{path:'accounts/ac-uti-stockupdate',component:AcUtiStockupdateComponent},
{path:'accounts/ac-uti-yearendprocess',component:AcUtiYearendprocessComponent},
{path:'tools',component:ToolsComponent},
{path:'sidenav',component:SidenavComponent},
{path:'ac-ma-accounttype',component:AcMaAccounttypeComponent},
{path:'ac-ma-accounttype/show-accounttype',component:ShowActypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
