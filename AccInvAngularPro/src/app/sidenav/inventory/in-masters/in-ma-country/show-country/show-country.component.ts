import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import { AddCountryComponent } from '../add-country/add-country.component';
import * as alertify from 'alertifyjs';

export interface CountryGlobalmodal
  {
    name: string,
    alpha3Code:string,
    currencies:string,

}

export interface Countrymodal{
  CountryId:number,
  CountryName:string,
  CountryCode:number,
  Currency:string,
  Status:boolean,
  CreatedOn:Date,
  CreatedBy:string,


}

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  countryglobal!: CountryGlobalmodal[];

  constructor(private service:SharedService,private dialog:MatDialog) { }

  displaycolums: string[] =['CountryId','CountryName','CountryCode','Currency','Status','CreatedOn','CreatedBy','action']
  countrydata!:Countrymodal[];
  finaldata:any;
 
  @ViewChild(MatPaginator) _paginators!:MatPaginator
  @ViewChild(MatSort) _sort!:MatSort

  ngOnInit(): void {
    this.loaditem();
  }

  openpopup(CountryId:any){
    const _popup =  this.dialog.open(AddCountryComponent,{
      width:'500px',
      data: {
        CountryId: CountryId
        
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.loaditem()
    })
  }

  


  loaditem() {
    this.service.getAllCountryList().subscribe(res => {
      this.countrydata = res;
      console.log(res)
      
      
      this.finaldata=new MatTableDataSource<Countrymodal>(this.countrydata);
      this.finaldata.paginator=this._paginators
      this.finaldata.sort=this._sort
    })
  }

  edititem(CountryId:any) {
    this.openpopup(CountryId);
    this.loaditem();
  }

  removeitem(CountryId: any) {

    alertify.confirm("Remove Item","Do you want to remove this Country?",()=>{
      this.service.deleteCountry(CountryId).subscribe(res=>{
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
