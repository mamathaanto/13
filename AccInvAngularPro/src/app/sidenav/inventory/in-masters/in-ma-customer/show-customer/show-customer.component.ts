import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';

export interface Customermodal{
  CustomerId:number,
  LFCode:string,
  CustomerName:string,
  RegisterationNo:string,
  RegistrationDate:Date,
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
  ContactPerson:string,
  ContactPersonPhone:string,
  CreditDays:number,
  CreditLimit:number,
  CustomerClass:string,
  IsForeign:boolean,
  Status:boolean,
  CreatedOn:Date,
  CreatedBy:string,
}

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private service:SharedService,private dialog:MatDialog) { }
  displaycolums:string[]=['CustomerId','LFCode','CustomerName',
  'RegisterationNo','RegisterationDate','LicenceNo','MainPhone',
  'WarehousePhone','Mobile','Fax','EmailId','CCMailId',
  'Website','StreetAddress','City','State','ZipCode','Country',
  'ContactPerson','ContactPersonPhone','CreditDays','CreditLimit','CustomerClass','IsForeign',
  'Status','CreatedOn','CreatedBy',
  'action']

  customerdata!:Customermodal[];
  finaldata:any;

  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort

  ngOnInit(): void {
    this.loaditem();
  }
  openpopup(CustomerId:any){
    const _popup =  this.dialog.open(AddEditCustomerComponent,{
      width:'500px',
      data: {
        CustomerId: CustomerId
        
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.loaditem()
    })
  }

  


  loaditem() {
    this.service.getallcustomer().subscribe(res => {
      this.customerdata = res;  
      this.finaldata=new MatTableDataSource<Customermodal>(this.customerdata);
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort
    })
  }

  edititem(CustomerId:any) {
    this.openpopup(CustomerId);
    this.loaditem();
  }

  removeitem(CustomerId: any) {

    alertify.confirm("Remove Item","Do you want to remove this Vendor?",()=>{
      this.service.removecustomer(CustomerId).subscribe(res=>{
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

