import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import { AccountTypemodal } from '../accounttype.modal';
@Component({
  selector: 'app-show-actype',
  templateUrl: './show-actype.component.html',
  styleUrls: ['./show-actype.component.css']
})
export class ShowActypeComponent implements OnInit {

  constructor(private service:SharedService) { }
  displaycolums: string[] = ['AccTypeId','AccTypeName', 'Status']
  accounttypedata!: AccountTypemodal[];
  finaldata:any=[];
  idfilter:any=[]
  filterValue:any=[]

  

  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort


  ngOnInit(): void {
    this.loadaccounttype();
    }

  loadaccounttype() {
    this.service.getallaccounttype().subscribe(res => {
      this.accounttypedata = res;
      console.log(res)
      this.finaldata=new MatTableDataSource<AccountTypemodal>(this.accounttypedata);
      console.log(this.finaldata.AccTypeName)
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort
        })
     }


  // applyFilter(event: Event) {
  //    this.filterValue = (event.target as HTMLInputElement).value;
    
  //   this.finaldata.filter = this.filterValue.trim();
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finaldata.filter = filterValue.trim().toLowerCase();
    if (this.finaldata.paginator) {
      this.finaldata.paginator.firstPage();
    }
  }

}
