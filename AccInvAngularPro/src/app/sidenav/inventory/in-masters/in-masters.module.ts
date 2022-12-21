import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMastersRoutingModule } from './in-masters-routing.module';
import { InMaMaterialComponent } from './in-ma-material/in-ma-material.component';
import { InMaMatCategoryComponent } from './in-ma-material/in-ma-mat-category/in-ma-mat-category.component';
import { InMaMatTaxComponent } from './in-ma-material/in-ma-mat-tax/in-ma-mat-tax.component';
import { InMaMatUnitComponent } from './in-ma-material/in-ma-mat-unit/in-ma-mat-unit.component';
import { InMaMatItemmasterComponent } from './in-ma-material/in-ma-mat-itemmaster/in-ma-mat-itemmaster.component';
 import { ShowTaxComponent } from './in-ma-material/in-ma-mat-tax/show-tax/show-tax.component';
import { AddEditTaxComponent } from './in-ma-material/in-ma-mat-tax/add-edit-tax/add-edit-tax.component';

import { MaterialExampleModule } from 'src/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { AddEditCategoryComponent } from './in-ma-material/in-ma-mat-category/add-edit-category/add-edit-category.component';
import { ShowCategoryComponent } from './in-ma-material/in-ma-mat-category/show-category/show-category.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { AddEditUnitComponent } from './in-ma-material/in-ma-mat-unit/add-edit-unit/add-edit-unit.component';
import { ShowUnitComponent } from './in-ma-material/in-ma-mat-unit/show-unit/show-unit.component';
import { InMaStateComponent } from './in-ma-state/in-ma-state.component';
import { AddStateComponent } from './in-ma-state/add-state/add-state.component';
import { ShowStateComponent } from './in-ma-state/show-state/show-state.component';
import { ShowVendorComponent } from './in-ma-vendor/show-vendor/show-vendor.component';
import { AddEditVendorComponent } from './in-ma-vendor/add-edit-vendor/add-edit-vendor.component';
import { AddEditCustomerComponent } from './in-ma-customer/add-edit-customer/add-edit-customer.component';
import { ShowCustomerComponent } from './in-ma-customer/show-customer/show-customer.component';
import { InMaCountryComponent } from './in-ma-country/in-ma-country.component';
import { AddCountryComponent } from './in-ma-country/add-country/add-country.component';
import { ShowCountryComponent } from './in-ma-country/show-country/show-country.component';
import { InMaVendorComponent } from './in-ma-vendor/in-ma-vendor.component';
import { InMaCustomerComponent } from './in-ma-customer/in-ma-customer.component';
// import { AddEditVendorComponent } from './in-ma-vendor/add-edit-vendor/add-edit-vendor.component';
// import { ShowVendorComponent } from './in-ma-vendor/show-vendor/show-vendor.component';



@NgModule({
    declarations: [
        InMaMaterialComponent,
        InMaMatCategoryComponent,
        InMaMatTaxComponent,
        InMaMatUnitComponent,
        InMaMatItemmasterComponent,
        ShowTaxComponent,
        AddEditTaxComponent,
        AddEditCategoryComponent,
        ShowCategoryComponent,
        AddEditUnitComponent,
        ShowUnitComponent,
        InMaStateComponent,
        AddStateComponent,
        ShowStateComponent,
        ShowVendorComponent,
        InMaVendorComponent,
        AddEditVendorComponent,
        InMaCustomerComponent,
        AddEditCustomerComponent,
        ShowCustomerComponent,
        InMaCountryComponent,
        AddCountryComponent,
        ShowCountryComponent,
       
        // AddEditVendorComponent,
        // ShowVendorComponent
    ],
    imports: [
        CommonModule,
        InMastersRoutingModule,
        FormsModule,

        MaterialExampleModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule ,
        MatTableModule,
        
        

        MatMenuModule,
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class InMastersModule { }
