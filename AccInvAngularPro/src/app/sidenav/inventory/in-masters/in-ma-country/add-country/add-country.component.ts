import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  editdata: any;
  editid:any;
  baseunitlist:any=[]
  countryglobal: any=[];
  countrygloballist:any
  currencylist:any=[];
  currency: any;
  countrycode: any;
  valu: any;

  constructor(private service:SharedService,
    private dialog:MatDialog, 
    private builder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.list();
 if (this.data.CountryId != '' && this.data.CountryId != null) {
      this.service.getCountryList(this.data.CountryId).subscribe(res=>{
        this.editdata = res

        this.countryform.setValue({
          CountryId: this.editdata.CountryId,
          CountryName: this.editdata.CountryName,
          CountryCode: this.editdata.CountryCode,
          Currency:this.editdata.Currency,
          Status:this.editdata.Currency,
          CreatedOn:this.editdata.CreatedOn,
          CreatedBy:this.editdata.CreadtedBy
        })
      })
    }
}

  countryform=this.builder.group({
  CountryId:this.builder.control({ value: '', disabled: true}),
  CountryName:this.builder.control('',Validators.required),
  CountryCode:this.builder.control('',Validators.required),
  Currency:this.builder.control('',Validators.required),
  Status:this.builder.control(''),
  CreatedOn:this.builder.control(formatDate(new Date(Date.now()),'yyyy-MM-dd','en_US')),
  CreatedBy:this.builder.control('admin',Validators.required)
 })

closepopup(){
  return this.dialog.closeAll();
}


save(){
  if (this.countryform.valid){
    const editid=this.countryform.getRawValue().CountryId
    console.log(editid);
    if (editid != '' && editid != null) {
      this.service.updateCountry(editid,this.countryform.getRawValue()).subscribe(res =>{
        this.closepopup();
        alertify.success("updated Successfully");
      })
    }
    else {
      this.service.addCountry(this.countryform.value).subscribe(res => {
        console.log(res);
        this.closepopup();
        alertify.success("saved successfully");
      })
     }
  }
}


list() {
  this.service.getAllCountryList().subscribe(res => {
    this.baseunitlist = res;
    this.service.getGlobalCountry().subscribe(res => {
      this.countryglobal=res;
//       for(var i=0;i<this.countryglobal.length;i++){
// this.countrygloballist=this.countryglobal[i].name
// console.log(this.countrygloballist)
//       }
 })
  })
}

Codegen(value:any){
  this.service.getGlobalCountry().subscribe(res =>{
    this.countrygloballist=res
    for (var i = 0; i < this.countrygloballist.length; ++i) {
      if(this.countrygloballist[i].name==value)
      {
      this.countrycode=this.countrygloballist[i].alpha3Code
      this.currencylist=this.countrygloballist[i].currencies
      for(var j=0;j<this.currencylist.length;++j)
      {
      this.currency=this.currencylist[j].code
      }
      }
    }})
}
}
