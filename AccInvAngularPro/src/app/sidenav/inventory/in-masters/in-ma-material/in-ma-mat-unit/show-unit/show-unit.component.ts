import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemUnitmodal } from '../itemunit.modal';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import {MatTableModule} from '@angular/material/table';
import * as alertify from 'alertifyjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditUnitComponent } from '../add-edit-unit/add-edit-unit.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-show-unit',
  templateUrl: './show-unit.component.html',
  styleUrls: ['./show-unit.component.css']
})
export class ShowUnitComponent implements OnInit {
  constructor(private dialog:MatDialog,private service:SharedService) { }


  








  


  displaycolums: string[] = ['ItemUnitId', 'ItemUnit', 
  'ParentId', 'Con_Factor', 'Status',

   'CreatedOn', 
   'CreatedBy',
   'action']
  itemunitdata!: ItemUnitmodal[];
  finaldata:any;


  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort

  ngOnInit(): void {
     this.loaditem();




  }





  openpopup(ItemUnitId:any){
    const _popup =  this.dialog.open(AddEditUnitComponent,{
      width:'500px',
      data: {
        ItemUnitId: ItemUnitId
      }
      
    })
    _popup.afterClosed().subscribe(r => {
      this.loaditem()
    })
  }




  loaditem() {
    this.service.getallitemunit().subscribe(res => {
      this.itemunitdata = res;
      console.log(res)
      
      
      this.finaldata=new MatTableDataSource<ItemUnitmodal>(this.itemunitdata);
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort
     
   



    })
  }

  edititem(ItemUnitId:any) {
    this.openpopup(ItemUnitId);
    this.loaditem();
  }

  removeitem(ItemUnitId: any) {

    alertify.confirm("Remove Item","Do you want to remove this ItemUnit?",()=>{
      this.service.removeitemunit(ItemUnitId).subscribe(res=>{
        this.loaditem();

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



