import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as alertify from 'alertifyjs';
import { SharedService } from 'src/app/shared.service';
import { AddEditVendorComponent } from '../add-edit-vendor/add-edit-vendor.component';

export interface Vendormodal{
  VendorId:number,
  LFCode:string,
  VendorName:string,
  RegisterationNo:string,
  RegisterationDate:Date,
  LicenceNo:string,
  MainPhone:string,
  WarehousePhone:string,
  Mobile:string,
  Fax:string,
  EmailId:string,
  CCMailId:string,
  Website:string,
  StreetAddress:string,
  City:string,
  State:string,
  Zipcode:string,
  Country:string,
  NameToPrintOnCheque:string,
  ContactPerson:string,
  ContactPersonPhone:string,
  CreditDays:number,
  CreditLimit:number,
  Currency:string,
  IsForeign:boolean,
  Status:boolean,
  CreatedOn:Date,
  CreatedBy:string,

 
}


@Component({
  selector: 'app-show-vendor',
  templateUrl: './show-vendor.component.html',
  styleUrls: ['./show-vendor.component.css']
})
export class ShowVendorComponent implements OnInit {

  constructor(private service:SharedService,private dialog:MatDialog) { }
  displaycolums: string[] =['VendorId','LFCode','VendorName',
  'RegisterationNo','RegisterationDate','LicenceNo','MainPhone',
  'WarehousePhone','Mobile','Fax','EmailId','CCMailId',
  'Website','StreetAddress','City','State','ZipCode','Country','NameToPrintOnCheque',
  'ContactPerson','ContactPersonPhone','CreditDays','CreditLimit','Currency','IsForeign',
  'Status','CreatedOn','CreatedBy',
  'action']
  vendordata!:Vendormodal[];
  finaldata:any;

  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort

  ngOnInit(): void {
    this.loaditem();
  }

  openpopup(VendorId:any){
    const _popup =  this.dialog.open(AddEditVendorComponent,{
      width:'500px',
      data: {
        VendorId: VendorId
        
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.loaditem()
    })
  }

  


  loaditem() {
    this.service.getallvendor().subscribe(res => {
      this.vendordata = res;  
      this.finaldata=new MatTableDataSource<Vendormodal>(this.vendordata);
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort
    })
  }

  edititem(VendorId:any) {
    this.openpopup(VendorId);
    this.loaditem();
  }

  removeitem(VendorId: any) {

    alertify.confirm("Remove Item","Do you want to remove this Vendor?",()=>{
      this.service.removevendor(VendorId).subscribe(res=>{
        this.loaditem();

      })
    },
    function(){})
    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finaldata.filter = filterValue.trim().toLowerCase();

    if (this.finaldata.paginator) {
      this.finaldata.paginator.firstPage();
    }
  }





}

