import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTaxComponent } from './in-ma-material/in-ma-mat-tax/add-edit-tax/add-edit-tax.component';
import { ShowTaxComponent } from './in-ma-material/in-ma-mat-tax/show-tax/show-tax.component';
import { AddEditUnitComponent } from './in-ma-material/in-ma-mat-unit/add-edit-unit/add-edit-unit.component';
import { ShowUnitComponent } from './in-ma-material/in-ma-mat-unit/show-unit/show-unit.component';
import { InMaMaterialComponent } from './in-ma-material/in-ma-material.component';
import { InMaStateComponent } from './in-ma-state/in-ma-state.component';
import { AddEditVendorComponent } from './in-ma-vendor/add-edit-vendor/add-edit-vendor.component';
// import { AddEditVendorComponent } from './in-ma-vendor/add-edit-vendor/add-edit-vendor.component';
import { InMaVendorComponent } from './in-ma-vendor/in-ma-vendor.component';
import { ShowVendorComponent } from './in-ma-vendor/show-vendor/show-vendor.component';
// import { ShowVendorComponent } from './in-ma-vendor/show-vendor/show-vendor.component';

const routes: Routes = [
    {path:'in-ma-material',component:InMaMaterialComponent},
   {path:'in-ma-mat-unit/add-edit-unit',component:AddEditUnitComponent},
   {path:'in-ma-mat-unit/show-unit',component:ShowUnitComponent},
   {path:'in-ma-vendor',component:InMaVendorComponent},
   {path:'in-ma-state',component:InMaStateComponent},
   {path:'in-ma-vendor',component:InMaVendorComponent},
   {path:'in-ma-vendor/show-vendor',component:ShowVendorComponent},
   {path:'in-ma-vendor/add-edit-vendor',component:AddEditVendorComponent},


  




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InMastersRoutingModule { }
