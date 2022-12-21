import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {
  currencylist: any;

  constructor(private service:SharedService,
    private dialog:MatDialog, 
    private builder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    editdata:any;
    editid:any;
    baseunitlist:any=[]
    countrylist:any=[]


  ngOnInit(): void {
    this.list();
    if (this.data.CustomerId != '' && this.data.CustomerId != null) {
      this.service.getallbycustomerid(this.data.CustomerId).subscribe(res=>{
        this.editdata = res

        this.customerform.setValue({
          CustomerId: this.editdata.CustomerId,
          LFCode: this.editdata.LFCode,
          CustomerName: this.editdata.CustomerName,
          RegisterationNo:this.editdata.RegisterationNo,
          RegisterationDate:this.editdata.RegisterationDate,
          LicenceNo:this.editdata.LicenceNo,
          MainPhone:this.editdata.MainPhone,
          WarehousePhone:this.editdata.WarehousePhone,
          Mobile:this.editdata.Mobile,
          Fax:this.editdata.Fax,
          EmailId:this.editdata.EmailId,
          CCMailId:this.editdata.CCMailId,
          Website:this.editdata.Website,
          StreetAddress:this.editdata.StreetAddress,
          City:this.editdata.City,
          State:this.editdata.State,
          ZipCode:this.editdata.ZipCode,
          Country:this.editdata.Country,
          ContactPerson:this.editdata.ContactPerson,
          ContactPersonPhone:this.editdata.ContactPersonPhone,
          CreditDays:this.editdata.CreditDays,
          CreditLimit:this.editdata.CreditLimit,
          CustomerClass:this.editdata.CustomerClass,
          IsForeign:this.editdata.IsForeign,
          Status:this.editdata.Status,
          CreatedOn:this.editdata.CreatedOn,
          CreatedBy:this.editdata.CreatedBy

        })
      })
    }



  }

 customerform=this.builder.group({
  CustomerId:this.builder.control({ value: '', disabled: true}),
  LFCode:this.builder.control('1000',Validators.required),
  CustomerName: this.builder.control('',Validators.required),
  RegisterationNo:this.builder.control('',Validators.required),
  RegisterationDate:this.builder.control('',Validators.required),
  LicenceNo:this.builder.control('',Validators.required),
  MainPhone:this.builder.control('',Validators.required),
  WarehousePhone:this.builder.control('',Validators.required),
  Mobile:this.builder.control('',Validators.required),
  Fax:this.builder.control('',Validators.required),
  EmailId:this.builder.control('',Validators.required),
  CCMailId:this.builder.control('',Validators.required),
  Website:this.builder.control('',Validators.required),
  StreetAddress:this.builder.control('',Validators.required),
  City:this.builder.control('',Validators.required),
  State:this.builder.control('',Validators.required),
  ZipCode:this.builder.control('',Validators.required),
  Country:this.builder.control('',Validators.required),
  ContactPerson:this.builder.control('',Validators.required),
  ContactPersonPhone:this.builder.control('',Validators.required),
  CreditDays:this.builder.control('',Validators.required),
  CreditLimit:this.builder.control('',Validators.required),
  CustomerClass:this.builder.control('',Validators.required),
  IsForeign:this.builder.control('',Validators.required),
  Status:this.builder.control('',Validators.required),
  CreatedOn:this.builder.control(formatDate(new Date(),'yyyy-MM-dd','en_US'),Validators.required),
  CreatedBy:this.builder.control('admin',Validators.required),
  
  
 })

closepopup(){
  return this.dialog.closeAll();
}


save(){
  if (this.customerform.valid){
    const editid=this.customerform.getRawValue().CustomerId
    console.log(editid);
    if (editid != '' && editid != null) {
      this.service.updatecustomer(editid,this.customerform.getRawValue()).subscribe(res =>{
        this.closepopup();
        alertify.success("updated Successfully");
      })
    }



    else {
      this.service.createcustomer(this.customerform.value).subscribe(res => {
        this.closepopup();
        alertify.success("saved successfully");
      })
     }
  }
}


list() {
  this.service.getallcustomer().subscribe(res => {
    this.baseunitlist = res;
  })

  this.service.getAllCountryList().subscribe(val =>{
    this.countrylist = val;
  })
}

  }



