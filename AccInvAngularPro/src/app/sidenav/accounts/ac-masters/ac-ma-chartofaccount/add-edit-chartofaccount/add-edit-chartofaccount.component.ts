import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-edit-chartofaccount',
  templateUrl: './add-edit-chartofaccount.component.html',
  styleUrls: ['./add-edit-chartofaccount.component.css']
})
export class AddEditChartofaccountComponent implements OnInit {

 


  editdata: any;
  editid: any;

  
 
  baseunitlist: any = []
  ChartOfAccountId:any;
 
list1:any=[]
  slctoption:boolean=false;
  isThirdInputFieldVisible: boolean = false;

  gl:boolean=false
  parentid:any
accgroupid:any
accgrouplist:any=[]

  constructor(private service: SharedService,
    private dialog: MatDialog,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

   
    this.list();
this.accountgrouplist();



    if (this.data.ChartOfAccountId != '' && this.data.ChartOfAccountId != null) {
      this.service.getallchartofaccountbyid(this.data.ChartofAccountId).subscribe(res => {
        this.editdata = res
        if(this.editdata.Status==0){
          this.editdata.Status=true
        }
        else{
          this.editdata.Status=false
        }
       

        this.chartofaccountform.setValue({
               ChartOfAccountId:this.editdata.ChartOfAccountId,
               LFCode:this.editdata.LFCode,
               AccountName:this.editdata.AccountName,
               AccGroupId:this.editdata.AccGroupId,
               ParentId:this.editdata.ParentId,
               ParentCode:this.editdata.ParentCode,
               IsBalanceSheet:this.editdata.IsBalanceSheet,
               Status:this.editdata.Status,
               CreatedOn : this.editdata.CreatedOn,
                
               CreatedBy:this.editdata.CreatedBy
         
        })

      })
    }


  }

 

  

   chartofaccountform = this.builder.group({
       ChartOfAccountId: this.builder.control({ value:'',disabled:true}),
       LFCode: this.builder.control('', Validators.required),
       AccountName: this.builder.control('', Validators.required),
       AccGroupId: this.builder.control('' ,Validators.required),
       ParentId: this.builder.control('' ,Validators.required),
       ParentCode: this.builder.control('' ,Validators.required),
       IsBalanceSheet: this.builder.control('' ,Validators.required),
       Status: this.builder.control(true,Validators.required),
      CreatedOn: this.builder.control(formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en_US'), Validators.required),
      CreatedBy: this.builder.control('', Validators.required),
     
   })
  

  closepopup() {
    return this.dialog.closeAll();
  }

 



  save() {

    if (this.chartofaccountform.valid) {
      const editid = this.chartofaccountform.getRawValue().ChartOfAccountId
      console.log(editid);
      if (editid != '' && editid != null) {
       
        this.service.updatechartofaccount(editid, this.chartofaccountform.getRawValue()).subscribe(res => {

          this.closepopup();
          alertify.success("Updated Successfully");
        })
      }



      else {
        this.service.createchartofaccount(this.chartofaccountform.value).subscribe(res => {
          console.log(res);

          this.closepopup();
          alertify.success("Saved Successfully");
        })
      }
    }
  }


  list() {
    this.service.getallchartofaccount().subscribe(res => {
      this.baseunitlist = res;
     
    })
  }

 selectingchartofacc(value:any){
  console.log(value)
  

  this.service.getallchartofaccount().subscribe(res=>{
    this.list1=res;
    for(var i=0;i<this.list1.length;i++){
      if(this.list1[i].ParentId==value){
 this.parentid=this.list1[i].ParentId       
this.accgroupid=this.list1[i].AccGroupId
      }
    }
  })

 }


 accountgrouplist(){
  this.service.getallaccountgroup().subscribe(res=>{
    this.accgrouplist=res;

  })
 }
 selectingaccgroup(value:any){
console.log(value)
 }

}
