import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-edit-vendor',
  templateUrl: './add-edit-vendor.component.html',
  styleUrls: ['./add-edit-vendor.component.css']
})
export class AddEditVendorComponent implements OnInit {
  currencylist: any;
  currency: any;
  statelist:any
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

    if (this.data.VendorId != '' && this.data.VendorId != null) {
      this.service.getallbyvendorid(this.data.VendorId).subscribe(res=>{
        this.editdata = res

        this.vendorform.setValue({
          VendorId: this.editdata.VendorId,
          LFCode: this.editdata.LFCode,
          VendorName: this.editdata.VendorName,
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
          NameToPrintOnCheque:this.editdata.NameToPrintOnCheque,
          ContactPerson:this.editdata.ContactPerson,
          ContactPersonPhone:this.editdata.ContactPersonPhone,
          CreditDays:this.editdata.CreditDays,
          CreditLimit:this.editdata.CreditLimit,
          Currency:this.editdata.Currency,
          IsForeign:this.editdata.IsForeign,
          Status:this.editdata.Status,
          CreatedOn:this.editdata.CreatedOn,
          CreatedBy:this.editdata.CreatedBy

        })
      })
    }


  //   {
  //     "VendorId":"1",
  //     "LFCode":"1000",
  //     "VendorName":"Sun",
  //     "RegistrationNo":"BSAJHS",
  //     "RegistrationDate":"2022-01-01",
  //     "LicenceNo":"ADFAG",
  //     "MainPhone":"9876543214",
  //     "WarehousePhone":"2345267",
  //     "Mobile":"8976524513",
  //     "Fax":"JAKISJK",
  //     "EmailId":"asq1@gmail.com",
  //     "CCMailId":"asqq1@gmail.com",
  //     "Website":"www.asqq.com",
  //     "StreetAddress":"aswijmoosk",
  //     "City":"Thrissur",
  //     "State":"Kerala",
  //     "ZipCode":"680001",
  //     "Country":"India",
  //     "NameToPrintOnCheque":"SUNLT",
  //     "ContactPerson":"Atyy",
  //     "ContactPersonPhone":"1928376524",
  //     "CreditDays":"23",
  //     "CreditLimit":"100000",
  //     "Currency":"Rupee",
  //     "IsForeign":false,
  //     "Status":true,
  //     "CreatedOn":"2022-01-01",
  //     "CreatedBy":"admin"
  // }


  }

 vendorform=this.builder.group({
  VendorId:this.builder.control({ value: '', disabled: true}),
  LFCode:this.builder.control('1000',Validators.required),
  VendorName: this.builder.control('',Validators.required),
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
  NameToPrintOnCheque:this.builder.control('',Validators.required),
  ContactPerson:this.builder.control('',Validators.required),
  ContactPersonPhone:this.builder.control('',Validators.required),
  CreditDays:this.builder.control('',Validators.required),
  CreditLimit:this.builder.control('',Validators.required),
  Currency:this.builder.control({value:'',disabled:true},Validators.required),
  IsForeign:this.builder.control('',Validators.required),
  Status:this.builder.control('',Validators.required),
  CreatedOn:this.builder.control(formatDate(new Date(),'yyyy-MM-dd','en_US'),Validators.required),
  CreatedBy:this.builder.control('admin',Validators.required),
  
  
 })

closepopup(){
  return this.dialog.closeAll();
}


save(){
  if (this.vendorform.valid){
    const editid=this.vendorform.getRawValue().VendorId
    console.log(editid);
    if (editid != '' && editid != null) {
      this.service.updatevendor(editid,this.vendorform.getRawValue()).subscribe(res =>{
        this.closepopup();
        alertify.success("updated Successfully");
      })
    }



    else {
      this.service.createvendor(this.vendorform.value).subscribe(res => {
        this.closepopup();
        alertify.success("saved successfully");
      })
     }
  }
}




list() {
  this.service.getallvendor().subscribe(res => {
    this.baseunitlist = res;
    
  })

  this.service.getallstate().subscribe(res=>{
    this.statelist=res
  })

  this.service.getAllCountryList().subscribe(val =>{
    this.countrylist = val;
  })
}

Codegen(value:any){
  this.service.getAllCountryList().subscribe(res =>{
    this.countrylist=res
    for (var i = 0; i < this.countrylist.length; ++i) {
      if(this.countrylist[i].CountryName==value)
      {
      this.currencylist=this.countrylist[i].Currency
    }}
  })}
}
