import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import { AddEditAccgroupComponent } from '../add-edit-accgroup/add-edit-accgroup.component';
import * as alertify from 'alertifyjs';
import { formatDate } from '@angular/common';
export interface AccountGroupmodal{
  AccGroupId:number,
  AccGroupCode: string,
  AccGroupName:string,
  AccSubTypeId:number,
  Status:boolean,
  CreatedOn:Date,
  CreatedBy:string
  
 
}

@Component({
  selector: 'app-show-accgroup',
  templateUrl: './show-accgroup.component.html',
  styleUrls: ['./show-accgroup.component.css']
})
export class ShowAccgroupComponent implements OnInit {

  constructor(private service:SharedService,private dialog:MatDialog) { }




  
  
  
  
  
  
  
    displaycolums: string[] = ['AccGroupId','AccGroupCode',
    'AccGroupName',
    'AccSubTypeId','Status','CreatedOn','CreatedBy','action']
     accountgroupdata!: AccountGroupmodal[];
     finaldata:any=[];
  
  
    @ViewChild(MatPaginator) _paginators!:MatPaginator
    @ViewChild(MatSort) _sort!:MatSort
  
    ngOnInit(): void {
       this.loadaccountgroup();
  
  
    }
  
  
  
  
  
    openpopup(AccGroupId:any){
      const _popup =  this.dialog.open(AddEditAccgroupComponent,{
        width:'500px',
        data: {
          AccGroupId:AccGroupId 
        }
        
      })
      _popup.afterClosed().subscribe(r => {
        this.loadaccountgroup()
      })
    }
  
    loadaccountgroup() {
      this.service.getallaccountgroup().subscribe(res => {
        this.accountgroupdata = res;
        this.finaldata=new MatTableDataSource<AccountGroupmodal>(this.accountgroupdata);
        this.finaldata.paginator=this._paginators
        this.finaldata.sort=this._sort
  
      })
    }
  
    editaccountgroup(AccGroupId:any) {
      this.openpopup(AccGroupId);
    }
  
    removeaccountgroup(AccGroupId:any) {
  
      alertify.confirm("Remove AccountGroup","Do you want to remove this AccountGroup?",()=>{
        this.service.removeaccountgroup(AccGroupId).subscribe(res=>{
          this.loadaccountgroup();
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
