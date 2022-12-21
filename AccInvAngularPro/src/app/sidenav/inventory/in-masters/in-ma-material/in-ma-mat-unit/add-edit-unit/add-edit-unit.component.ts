import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { MatButtonModule } from '@angular/material/button';
import { withDisabledInitialNavigation } from '@angular/router';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import * as alertify from 'alertifyjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-edit-unit',
  templateUrl: './add-edit-unit.component.html',
  styleUrls: ['./add-edit-unit.component.css']
})
export class AddEditUnitComponent implements OnInit {
  constructor(private service: SharedService,
    private dialog: MatDialog,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }







  editdata: any;
  editid: any;
  today: any;
  baseunitlist: any = []
  li: any;
  val:any;





  ngOnInit(): void {

    this.list();




    if (this.data.ItemUnitId != '' && this.data.ItemUnitId != null) {
      this.service.getallbyitemunitid(this.data.ItemUnitId).subscribe(res => {
        this.editdata = res
      
       

        this.itemform.setValue({
          ItemUnitId: this.editdata.ItemUnitId,
          ItemUnit: this.editdata.ItemUnit,
          ParentId: this.editdata.ParentId >0?this.editdata.ParentId:0, 
          Con_Factor: this.editdata.Con_Factor,
          Status: this.editdata.Status,
           CreatedOn: this.editdata.CreatedOn,
          CreatedBy: this.editdata.CreatedBy
         
        })
       
      })
    }


  }

  

  itemform = this.builder.group({
    ItemUnitId: this.builder.control({ value: '', disabled: true }),
    ItemUnit: this.builder.control('', Validators.required),
    ParentId: this.builder.control('0', Validators.required),
    Con_Factor: this.builder.control('1', Validators.required),
    Status: this.builder.control(true,Validators.required),
    CreatedOn: this.builder.control(formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en_US'),Validators.required ),
    CreatedBy: this.builder.control('admin',Validators.required),


  })

  closepopup() {
    return this.dialog.closeAll();
  }




  save() {

    if (this.itemform.valid) {
      const editid = this.itemform.getRawValue().ItemUnitId
      console.log(editid);
      if (editid != '' && editid != null) {
       
        this.service.updateitemunit(editid, this.itemform.getRawValue()).subscribe(res => {

          this.closepopup();
          alertify.success("Updated Successfully");
        })
      }



      else {
        this.service.createitemunit(this.itemform.value).subscribe(res => {
          console.log(res);

          this.closepopup();
          alertify.success("Saved Successfully");
        })
       }
    }
  }


  list() {
    this.service.getallitemunit().subscribe(res => {
      this.baseunitlist = res;
    })
  }



}


