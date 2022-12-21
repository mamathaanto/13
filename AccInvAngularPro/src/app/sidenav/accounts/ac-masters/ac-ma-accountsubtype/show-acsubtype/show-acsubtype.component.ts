import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import { AddEditAcsubtypeComponent } from '../add-edit-acsubtype/add-edit-acsubtype.component';
import * as alertify from 'alertifyjs';
import { MatButtonModule } from '@angular/material/button';
import { MaterialExampleModule } from 'src/material.module';


export interface AccountSubtypemodal{
  AccSubTypeId:number,
  AccSubTypeCode: string,
  AccSubTypeName :string,
  AccTypeId:number,
  Status:boolean,
  CreatedOn:Date,
  CreatedBy:string
  
 
}
@Component({
  selector: 'app-show-acsubtype',
  templateUrl: './show-acsubtype.component.html',
  styleUrls: ['./show-acsubtype.component.css']
})
export class ShowAcsubtypeComponent implements OnInit {

  constructor(private service:SharedService,private dialog:MatDialog) { }
  displaycolums: string[] = ['AccSubTypeId ','AccSubTypeCode', 'AccSubTypeName','AccTypeId','Status','action']
   accountsubtypedata!: AccountSubtypemodal[];
   finaldata:any=[];


 
  dataSource:any;
  today:any;
  day:any;
  year:any;

  ItemUnitIdFilter:string="";
  listwithoutfilter:any=[];
  filterlist:any=[];

  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort

  ngOnInit(): void {
     this.loadaccountsubtype();


  }

  openpopup(AccSubTypeId :any){
    const _popup =  this.dialog.open(AddEditAcsubtypeComponent,{
      width:'500px',
      data: {
        AccSubTypeId : AccSubTypeId 
      }
      
    })
    _popup.afterClosed().subscribe(r => {
      this.loadaccountsubtype()
    })
  }

  loadaccountsubtype() {
    this.service.getallaccountsubtype().subscribe(res => {
      this.accountsubtypedata = res;
      this.finaldata=new MatTableDataSource<AccountSubtypemodal>(this.accountsubtypedata);
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort
      this.filterlist=res;
      this.listwithoutfilter=res
    })
  }

  editaccountsubtype(AccSubTypeId : any) {
    this.openpopup(AccSubTypeId );
  }

  removeaccountsubtype(AccSubTypeId : any) {

    alertify.confirm("Remove AccountSubtype","Do you want to remove this AccountSubtype?",()=>{
      this.service.removeaccountsubtype(AccSubTypeId ).subscribe(res=>{
        this.loadaccountsubtype();
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
}




