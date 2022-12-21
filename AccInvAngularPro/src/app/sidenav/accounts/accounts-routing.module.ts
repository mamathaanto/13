import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcMaAccountgroupComponent } from './ac-masters/ac-ma-accountgroup/ac-ma-accountgroup.component';
import { AcMaAccountsubtypeComponent } from './ac-masters/ac-ma-accountsubtype/ac-ma-accountsubtype.component';
import { AddEditAcsubtypeComponent } from './ac-masters/ac-ma-accountsubtype/add-edit-acsubtype/add-edit-acsubtype.component';
import { ShowAcsubtypeComponent } from './ac-masters/ac-ma-accountsubtype/show-acsubtype/show-acsubtype.component';
import { AcMaAccounttypeComponent } from './ac-masters/ac-ma-accounttype/ac-ma-accounttype.component';
import { ShowActypeComponent } from './ac-masters/ac-ma-accounttype/show-actype/show-actype.component';
import { AcMaChartofaccountComponent } from './ac-masters/ac-ma-chartofaccount/ac-ma-chartofaccount.component';
import { AddEditChartofaccountComponent } from './ac-masters/ac-ma-chartofaccount/add-edit-chartofaccount/add-edit-chartofaccount.component';
import { ShowChartofaccountComponent } from './ac-masters/ac-ma-chartofaccount/show-chartofaccount/show-chartofaccount.component';
import { AcMastersComponent } from './ac-masters/ac-masters.component';
import { AcReportsComponent } from './ac-reports/ac-reports.component';
import { AcTransactionsComponent } from './ac-transactions/ac-transactions.component';
import { AcUtilitiesComponent } from './ac-utilities/ac-utilities.component';

const routes: Routes = [

   {
  path:'ac-masters',component:AcMastersComponent
 },
 {
  path:'ac-reports',component:AcReportsComponent
},
{
  path:'ac-transactions',component:AcTransactionsComponent
},
{
  path:'ac-utilities',component:AcUtilitiesComponent
},
{path:'ac-ma-accounttype/show-actype',component:ShowActypeComponent},

 {path:'ac-ma-accounttype',component:AcMaAccounttypeComponent},

 


// {path:'ac-ma-chartofaccount',component:AcMaChartofaccountComponent},
// {path:'ac-ma-chartofaccount/show-chartofccount',component:ShowChartofaccountComponent},
// {path:'ac-ma-chartofaccount/add-edit-chartofaccount',component:AddEditChartofaccountComponent},


// {path:'ac-masters/ac-ma-accountgroup',component:AcMaAccountgroupComponent},
// {path:'ac-masters/ac-ma-accountsubtype/add-edit-acsubtype',component:AddEditAcsubtypeComponent},
// {path:'ac-masters/ac-ma-accountsubtype/show-acsubtype',component:ShowAcsubtypeComponent},
// {path:'ac-masters/ac-ma-accountsubtype',component:AcMaAccountsubtypeComponent},
// {path:'ac-masters/ac-ma-accounttype',component:AcMaAccounttypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
