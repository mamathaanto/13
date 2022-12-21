import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InMastersComponent } from './in-masters/in-masters.component';
import { InReportsComponent } from './in-reports/in-reports.component';
import { InTransactionsComponent } from './in-transactions/in-transactions.component';

const routes: Routes = [
  {
   path:'in-masters',
   component:InMastersComponent
},
 {
   path:'in-transactions',
   component:InTransactionsComponent
 },
 {
   path:'in-reports',
  component:InReportsComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
