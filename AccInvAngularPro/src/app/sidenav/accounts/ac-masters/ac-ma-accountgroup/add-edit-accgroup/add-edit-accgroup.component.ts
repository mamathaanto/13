import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-edit-accgroup',
  templateUrl: './add-edit-accgroup.component.html',
  styleUrls: ['./add-edit-accgroup.component.css']
})
export class AddEditAccgroupComponent implements OnInit {

 
 


  accounttypeid:any;
  editdata: any;
  editid: any;
 
 
  
  baseunitlist: any = []

  val:any;
  acctypeidvalue: any;

  
  constructor(private service: SharedService,
    private dialog: MatDialog,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
    this.list();
    if (this.data.AccSubTypeId != '' && this.data.AccSubTypeId != null) {
      this.service.getallaccountsubtypebyid(this.data.AccSubTypeId).subscribe(res => {
        this.editdata = res
   
        this.accountgroupform.setValue({
          AccGroupId:this.editdata.AccGroupId,
          AccGroupCode:this.editdata.AccGroupCode,
          AccGroupName:this.editdata.AccGroupName,
          AccSubTypeId:this.editdata.AccSubTypeId,
          Status:this.editdata.Status,
          CreatedOn : this.editdata.CreatedOn,
          CreatedBy:this.editdata.CreatedBy
         
        })
        
      })
    }


  }

    accountgroupform = this.builder.group({
    AccGroupId: this.builder.control({ value:'',disabled:true}),
    AccGroupCode: this.builder.control('', Validators.required),
    AccGroupName: this.builder.control('', Validators.required),
    AccSubTypeId: this.builder.control('', Validators.required),
    Status: this.builder.control(true,Validators.required),
    CreatedOn: this.builder.control(formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en_US'),Validators.required),
      CreatedBy: this.builder.control('',Validators.required),
   })
  

  closepopup() {
    return this.dialog.closeAll();
  }

 



  save() {
         if (this.accountgroupform.valid) {
      const editid = this.accountgroupform.getRawValue().AccGroupId
      console.log(editid);
      if (editid != '' && editid != null) {
        this.service.updateaccountgroup(editid, this.accountgroupform.getRawValue()).subscribe(res => {

          this.closepopup();
          alertify.success("Updated Successfully");
        })
      }
      else {
        this.service.createaccountgroup(this.accountgroupform.value).subscribe(res => {
          console.log(res);
          this.closepopup();
          alertify.success("Saved Successfully");
        })
      }
    }
}


  list() {
    this.service.getallaccountsubtype().subscribe(res => {
      this.baseunitlist = res;
    })
  }


  Codegen(value:any){
    console.log(value)
  }
}
