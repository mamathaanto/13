import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelmenuComponent } from './sidenav/sublevelmenu.component';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { AdministrationComponent } from './sidenav/administration/administration.component';
import { CompanyregistrationComponent } from './sidenav/administration/companyregistration/companyregistration.component';
import { BranchComponent } from './sidenav/administration/branch/branch.component';
import { UsermanagementComponent } from './sidenav/administration/usermanagement/usermanagement.component';
import { SettingsComponent } from './sidenav/administration/settings/settings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import {MatIconModule} from '@angular/material/icon';
import { ToolsComponent } from './sidenav/tools/tools.component';

// import { AddEditItemComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-unit/add-edit-item/add-edit-item.component';
// import { ShowItemComponent } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-unit/show-item/show-item.component';


import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';




import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import {MatMenuModule} from '@angular/material/menu';

import { MaterialExampleModule } from 'src/material.module';
import {MatTableModule} from '@angular/material/table';


import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelmenuComponent,
    DashboardComponent,
    AdministrationComponent,
    CompanyregistrationComponent,
    BranchComponent,
    UsermanagementComponent,
    SettingsComponent,
    BodyComponent,
    ToolsComponent,

    // AddEditItemComponent,
    // ShowItemComponent
    
  
    
    
    


  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MaterialExampleModule ,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule
   

    
  ],
  
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
