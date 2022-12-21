import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import { AddEditChartofaccountComponent } from '../add-edit-chartofaccount/add-edit-chartofaccount.component';
import * as alertify from 'alertifyjs';

export interface Chartofaccountmodal
{
  ChartofAccountId:any;
  LFCode:String;
  AccountName:String;
  AccGroupId:Number;
  ParentId:Number;
  ParentCode:String;
  IsBalanceSheet:Number;
  Status:Boolean;
  CreatedOn:Date;
  CreatedBy:String;
}

@Component({
  selector: 'app-show-chartofaccount',
  templateUrl: './show-chartofaccount.component.html',
  styleUrls: ['./show-chartofaccount.component.css']
})
export class ShowChartofaccountComponent implements OnInit {

  constructor(private service:SharedService,private dialog:MatDialog) { }

  displaycolums: string[] = ['ChartOfAccountId','LFCode', 'AccountName','AccGroupId','ParentId','ParentCode','IsBalanceSheet','Status','CreatedOn','CreatedBy','action']
   chartofaccountdata!: Chartofaccountmodal[];
   finaldata:any=[];
sl:any=[]
sl1:any;
 ab:any=[]
ab1:any

  dataSource:any;
  today:any;
  day:any;
  year:any;

  listcountry!: any[]
  countrySelected!: string
  listState!: any[]
  selectedState!: string
  listCity!: any[]
  show:boolean=false;

  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort

  ngOnInit(): void {

    this.loadchartofaccount();
    this.statelist();
    this.fetchCountry();
    // this.onCountrySelected();
   
  }

  openpopup(ChartOfAccountId :any){
    const _popup =  this.dialog.open(AddEditChartofaccountComponent,{
      width:'500px',
      data: {
        ChartOfAccountId : ChartOfAccountId ,
      }
      
    })
    _popup.afterClosed().subscribe(r => {
      this.loadchartofaccount()
    })
  }

  loadchartofaccount() {
    this.service.getallchartofaccount().subscribe(res => {
      this.chartofaccountdata = res;
      this.finaldata=new MatTableDataSource<Chartofaccountmodal>(this.chartofaccountdata);
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort

     


    })
  }

  editchartofaccount(ChartOfAccountId : any) {
    this.openpopup(ChartOfAccountId );
  }

  removechartofaccount(ChartOfAccountId : any) {

    alertify.confirm("Remove ChartOfAccount ","Do you want to remove this ChartOfAccount?",()=>{
      this.service.removechartofaccount(ChartOfAccountId ).subscribe(res=>{
        this.loadchartofaccount();
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


  statelist(){
    this.service.getState().subscribe(res=>{
      this.sl=res
      for(var i=0;i<this.sl.length;i++){
      this.sl1=this.sl[i].subcountry
      }
console.log(this.sl)
    })

    
  }

//   stl(na:any){
// this.service.getStateOfSelectedCountry(na).subscribe(res=>{
//   this.ab=res
//   console.log(res)
//   for(var i=0;i<this.ab.length;i++){
//     this.ab1=this.ab[i]
//     }
//   })
//   }


  private fetchCountry(){
    this.service.getCountry().subscribe(data=>{
    this.listcountry = data
    console.log('Countries fetched', this.listcountry)
    })
  
  }
  
  // onCountrySelected(){
  //   this.service.getStateOfSelectedCountry().subscribe(data=>{
  //     this.listState = data
  //     console.log('States Retrieved', this.listState)
  //   })
  // }
  onStateSelected(countryparam = this.countrySelected, stateparam = this.selectedState){
  this.service.getCitiesOfSelectedState(countryparam, stateparam).subscribe(data=>{
    this.listCity = data
    console.log('Cities retrieved', this.listCity)
  })
  }

}






