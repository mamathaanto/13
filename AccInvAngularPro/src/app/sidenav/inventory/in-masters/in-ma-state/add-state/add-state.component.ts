import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import * as alertify from 'alertifyjs'


@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  editdata: any;
  baseunitlist: any = []
  sl: any = []
  sl1: any = []
  sl2: any

  cid: any=[];



  listcountry!: any[]
  countrySelected!: string
  listState!: any[]
  selectedState!: string
  listCity!: any[]
 

  constructor(private service: SharedService,
    private dialog: MatDialog,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  ngOnInit(): void {

    this.list();

    this.statelist();

    this.country();

this.fetchCountry();


    if (this.data.StateId != '' && this.data.StateId != null) {
      this.service.getallstatebyid(this.data.StateId).subscribe(res => {
        this.editdata = res



        this.stateform.setValue({
          StateId: this.editdata.StateId,
          StateName: this.editdata.StateName,
          StateCode: this.editdata.StateCode,
          CountryId: this.editdata.CountryId,
          Status: this.editdata.Status,
          CreatedOn: this.editdata.CreatedOn,
          CreatedBy: this.editdata.CreatedBy

        })

      })
    }


  }
   stateform = this.builder.group({
    StateId: this.builder.control({value:'',disabled:true}),
    StateName: this.builder.control('', Validators.required),
    StateCode: this.builder.control('', Validators.required),
    CountryId: this.builder.control('', Validators.required),
    Status: this.builder.control(true,Validators.required),
    CreatedOn: this.builder.control(formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en_US'),Validators.required),
    CreatedBy: this.builder.control('Admin',Validators.required),
  })


  closepopup() {
    return this.dialog.closeAll();
  }





  save() {

    if (this.stateform.valid) {
    const editid = this.stateform.getRawValue().StateId
    console.log(editid);
    if (editid != '' && editid != null) {

      // this.service.updatestate(editid, this.stateform.getRawValue()).subscribe(res => {

      //   this.closepopup();
      //   alertify.success("Updated Successfully");
      // })
    }
    else{
    this.service.createstate(this.stateform.value).subscribe(res => {
      console.log(this.stateform.value);

      this.closepopup();
      alertify.success("Saved Successfully");
    })
  }

  }




  }



  list() {
    this.service.getallstate().subscribe(res => {
      this.baseunitlist = res;
    })
  }

  statelist() {
    this.service.getState().subscribe(res => {
      this.sl = res


    })
  }

 

  country() {
    this.service.getcountryid().subscribe(res => {
      this.cid = res
    console.log(this.cid)
    })
  }
  countrychange(value: any) {
    console.log(value);
 
  }


  private fetchCountry(){
    this.service.getCountry().subscribe(data=>{
    this.listcountry = data
    console.log('Countries fetched', this.listcountry)
    })
  }
  
  onCountrySelected(val:any){
    this.service.getStateOfSelectedCountry(val).subscribe(data=>{
      this.listState = data
      console.log('States Retrieved', this.listState)
    })
  }

  onStateSelected(){
}


}