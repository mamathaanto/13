import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {SharedService} from 'src/app/shared.service';
import { AddEditTaxComponent } from '../add-edit-tax/add-edit-tax.component';



@Component({
  selector: 'app-show-tax',
  templateUrl: './show-tax.component.html',
  styleUrls: ['./show-tax.component.css']
})
export class ShowTaxComponent implements OnInit {



  constructor(private service:SharedService,private dialog:MatDialog) { }

  TaxmasterList:any=[];

  ModalTitle!: string;
  ActivateAddEditTaxComp:boolean=false;
  tax:any;

  TaxmasterIdFilter:string="";
  TaxpercentFilter:string="";
  TaxmasterListWithoutFilter:any=[];

  
  

  ngOnInit(): void {
    this.refreshTaxList();
    
  }

  



  addClick(){
    this.tax={
      TaxmasterId:0,
      TaxmasterTaxpercent:""
    }
    this.ModalTitle="Add TaxMaster";
    this.ActivateAddEditTaxComp=true;

  }

  editClick(item: any){
    this.tax=item;
    this.ModalTitle="Edit TaxMaster";
    this.ActivateAddEditTaxComp=true;
  }

  deleteClick(item: { TaxmasterId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteTaxMaster(item.TaxmasterId).subscribe(data=>{
        alert(data.toString());
        this.refreshTaxList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTaxComp=false;
    this.refreshTaxList();
  }


  refreshTaxList(){
    this.service.getTaxList().subscribe(data=>{
      this.TaxmasterList=data;
      this.TaxmasterListWithoutFilter=data;
    });
  }

  FilterFn(){
    var TaxmasterIdFilter = this.TaxmasterIdFilter;
    var TaxpercentFilter = this.TaxpercentFilter;

    this.TaxmasterList = this.TaxmasterListWithoutFilter.filter(function (el: { TaxmasterId: { toString: () => string; }; Taxpercent: { toString: () => string; }; }){
        return el.TaxmasterId.toString().toLowerCase().includes(
          TaxmasterIdFilter.toString().trim().toLowerCase()
        )&&
        el.Taxpercent.toString().toLowerCase().includes(
          TaxpercentFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.TaxmasterList = this.TaxmasterListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
