import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AcMastersComponent } from './ac-masters/ac-masters.component';
import { AcTransactionsComponent } from './ac-transactions/ac-transactions.component';
import { AcReportsComponent } from './ac-reports/ac-reports.component';
import { AcUtilitiesComponent } from './ac-utilities/ac-utilities.component';
import { AcMaAccounttypeComponent } from './ac-masters/ac-ma-accounttype/ac-ma-accounttype.component';
import { AcMaAccountsubtypeComponent } from './ac-masters/ac-ma-accountsubtype/ac-ma-accountsubtype.component';
import { AcMaAccountgroupComponent } from './ac-masters/ac-ma-accountgroup/ac-ma-accountgroup.component';
import { AcTranPaymentsvoucherComponent } from './ac-transactions/ac-tran-paymentsvoucher/ac-tran-paymentsvoucher.component';
import { AcTranReceiptsvoucherComponent } from './ac-transactions/ac-tran-receiptsvoucher/ac-tran-receiptsvoucher.component';
import { AcTranPettycashvoucherComponent } from './ac-transactions/ac-tran-pettycashvoucher/ac-tran-pettycashvoucher.component';
import { AcTranJournalentryComponent } from './ac-transactions/ac-tran-journalentry/ac-tran-journalentry.component';
import { AcTranContraentryComponent } from './ac-transactions/ac-tran-contraentry/ac-tran-contraentry.component';
import { AcTranDebitnoteComponent } from './ac-transactions/ac-tran-debitnote/ac-tran-debitnote.component';
import { AcTranCreditnoteComponent } from './ac-transactions/ac-tran-creditnote/ac-tran-creditnote.component';
import { AcTranBankreconciliationComponent } from './ac-transactions/ac-tran-bankreconciliation/ac-tran-bankreconciliation.component';
import { AcTranPdcstatusupdationComponent } from './ac-transactions/ac-tran-pdcstatusupdation/ac-tran-pdcstatusupdation.component';
import { AcTranReceiptpaymentallocationComponent } from './ac-transactions/ac-tran-receiptpaymentallocation/ac-tran-receiptpaymentallocation.component';
import { AcRepBankbookComponent } from './ac-reports/ac-rep-bankbook/ac-rep-bankbook.component';
import { AcRepCashbookComponent } from './ac-reports/ac-rep-cashbook/ac-rep-cashbook.component';
import { AcRepPettycashComponent } from './ac-reports/ac-rep-pettycash/ac-rep-pettycash.component';
import { AcRepLedgersComponent } from './ac-reports/ac-rep-ledgers/ac-rep-ledgers.component';
import { AcRepIncomeexpensesComponent } from './ac-reports/ac-rep-incomeexpenses/ac-rep-incomeexpenses.component';
import { AcRepTrialbalanceComponent } from './ac-reports/ac-rep-trialbalance/ac-rep-trialbalance.component';
import { AcRepIncomestatementComponent } from './ac-reports/ac-rep-incomestatement/ac-rep-incomestatement.component';
import { AcRepProfitlossComponent } from './ac-reports/ac-rep-profitloss/ac-rep-profitloss.component';
import { AcRepBalancesheetComponent } from './ac-reports/ac-rep-balancesheet/ac-rep-balancesheet.component';
import { AcRepCustomersupplierarComponent } from './ac-reports/ac-rep-customersupplierar/ac-rep-customersupplierar.component';
import { AcUtiApvComponent } from './ac-utilities/ac-uti-apv/ac-uti-apv.component';
import { AcUtiStockupdateComponent } from './ac-utilities/ac-uti-stockupdate/ac-uti-stockupdate.component';
import { AcUtiYearendprocessComponent } from './ac-utilities/ac-uti-yearendprocess/ac-uti-yearendprocess.component';
import { AcUtiPybfComponent } from './ac-utilities/ac-uti-pybf/ac-uti-pybf.component';
import { AcUtiDatabackupComponent } from './ac-utilities/ac-uti-databackup/ac-uti-databackup.component';
import { AcUtiSobComponent } from './ac-utilities/ac-uti-sob/ac-uti-sob.component';
import { AcUtiAobComponent } from './ac-utilities/ac-uti-aob/ac-uti-aob.component';
import { ShowActypeComponent } from './ac-masters/ac-ma-accounttype/show-actype/show-actype.component';
import { MaterialExampleModule } from 'src/material.module';
import { MatTableModule } from '@angular/material/table';
import { AddEditAcsubtypeComponent } from './ac-masters/ac-ma-accountsubtype/add-edit-acsubtype/add-edit-acsubtype.component';
import { ShowAcsubtypeComponent } from './ac-masters/ac-ma-accountsubtype/show-acsubtype/show-acsubtype.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditAccgroupComponent } from './ac-masters/ac-ma-accountgroup/add-edit-accgroup/add-edit-accgroup.component';
import { ShowAccgroupComponent } from './ac-masters/ac-ma-accountgroup/show-accgroup/show-accgroup.component';
import { AcMaChartofaccountComponent } from './ac-masters/ac-ma-chartofaccount/ac-ma-chartofaccount.component';
import { AddEditChartofaccountComponent } from './ac-masters/ac-ma-chartofaccount/add-edit-chartofaccount/add-edit-chartofaccount.component';
import { ShowChartofaccountComponent } from './ac-masters/ac-ma-chartofaccount/show-chartofaccount/show-chartofaccount.component';


@NgModule({
  declarations: [
    AcMastersComponent,
    AcTransactionsComponent,
    AcReportsComponent,
    AcUtilitiesComponent,
    AcMaAccounttypeComponent,
    AcMaAccountsubtypeComponent,
    AcMaAccountgroupComponent,
        AcTranPaymentsvoucherComponent,
    AcTranReceiptsvoucherComponent,
    AcTranPettycashvoucherComponent,
    AcTranJournalentryComponent,
    AcTranContraentryComponent,
    AcTranDebitnoteComponent,
    AcTranCreditnoteComponent,
    AcTranBankreconciliationComponent,
    AcTranPdcstatusupdationComponent,
    AcTranReceiptpaymentallocationComponent,
    AcRepBankbookComponent,
    AcRepCashbookComponent,
    AcRepPettycashComponent,
    AcRepLedgersComponent,
    AcRepIncomeexpensesComponent,
    AcRepTrialbalanceComponent,
    AcRepIncomestatementComponent,
    AcRepProfitlossComponent,
    AcRepBalancesheetComponent,
    AcRepCustomersupplierarComponent,
    AcUtiApvComponent,
    AcUtiStockupdateComponent,
    AcUtiYearendprocessComponent,
    AcUtiPybfComponent,
    AcUtiDatabackupComponent,
    AcUtiSobComponent,
    AcUtiAobComponent,
    ShowActypeComponent,
    AddEditAcsubtypeComponent,
    ShowAcsubtypeComponent,
    AddEditAccgroupComponent,
    ShowAccgroupComponent,
    AcMaChartofaccountComponent,
    AddEditChartofaccountComponent,
    ShowChartofaccountComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialExampleModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class AccountsModule { }
