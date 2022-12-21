import { formatDate } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, NgSelectOption, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs';
import { AccountSubtypemodal } from '../acsubtype.modal';
import { ParseSourceFile } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-acsubtype',
  templateUrl: './add-edit-acsubtype.component.html',
  styleUrls: ['./add-edit-acsubtype.component.css']
})
export class AddEditAcsubtypeComponent implements OnInit {
 
  editdata: any;
  editid: any;
 

  baseunitlist: any = []
  
  li: any;
  val:any;
  value:any;
  subcode:any;
  list1:any=[];
  acctypecode:any=[];

  accountsubtypeid: any;
  constructor(private service: SharedService,
    private dialog: MatDialog,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,private route:Router) { }




  ngOnInit(): void {

    this.list();
    


    
    AccSubTypeCode:this.subcode



if (this.data.AccSubTypeId != '' && this.data.AccSubTypeId != null) {
      this.service.getallaccountsubtypebyid(this.data.AccSubTypeId).subscribe(res => {
        this.editdata = res
        this.accountsubtypeform.setValue({
               AccSubTypeId:this.editdata.AccSubTypeId,
                  AccSubTypeCode:this.editdata.AccSubTypeCode,
                  AccSubTypeName:this.editdata.AccSubTypeName,
                   AccTypeId:this.editdata.AccTypeId,
                  Status:this.editdata.Status,
                 CreatedOn : this.editdata.CreatedOn,
                 CreatedBy:this.editdata.CreatedBy
         })
       })
    }
}
  accountsubtypeform = this.builder.group({
       AccSubTypeId: this.builder.control({ value:'',disabled:false}),
       AccSubTypeCode: this.builder.control('', Validators.required),
       AccSubTypeName: this.builder.control('', Validators.required),
       AccTypeId: this.builder.control('' ,Validators.required),
       Status: this.builder.control(true,Validators.required),
      CreatedOn: this.builder.control(formatDate(new Date(),'yyyy-MM-dd','en_US'),Validators.required),
      CreatedBy: this.builder.control('Admin',Validators.required),
})
  

  closepopup() {
    return this.dialog.closeAll();
  }

 



  save() {
if (this.accountsubtypeform.valid) {
      const editid = this.accountsubtypeform.getRawValue().AccSubTypeId
      console.log(editid);
      if (editid != '' && editid != null) {
     this.service.updateaccountsubtype(editid, this.accountsubtypeform.getRawValue()).subscribe(res => {
      this.closepopup();
          alertify.success("Updated Successfully");
        })
}
      else {
        this.service.createaccountsubtype(this.accountsubtypeform.value).subscribe(res => {
          console.log(res);
          this.closepopup();
          alertify.success("Saved Successfully");
        })
      }
    }
  }


  list() {
    this.service.getallaccounttype().subscribe(res => {
      this.baseunitlist = res;
    })
  }



  Codegen(value:any){
    // this.service.getallaccounttype().subscribe(res => {
    //   this.baseunitlist = res;
    // this.AccSubTypeId=this.AccSubTypeId;
    // this.AccTypeId=this.AccTypeId;
    // this.accountsubtypeid=this.baseunitlist.AccSubTypeId;})
    this.service.getallaccountsubtype().subscribe(res =>{
    this.list1=res
    for (var i = 0; i < this.list1.length; ++i) {
      if(this.list1[i].AccTypeId==value)
      {
      this.acctypecode=this.list1[i].AccSubTypeCode
      }
    }
    this.subcode=Math.max( this.acctypecode)
    if(this.subcode=='')
    {
      this.subcode=value*10
    }
    else
    {
      this.subcode=this.subcode+1
    }
    this.acctypecode = [];
    console.log(this.subcode)
    return (this.subcode)
    })
     // this.subcode = Math.max(...(this.list1.accountsubtypeid));
    }




}
