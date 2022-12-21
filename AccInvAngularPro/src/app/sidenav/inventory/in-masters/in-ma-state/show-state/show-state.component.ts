import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';
import { AddStateComponent } from '../add-state/add-state.component';


export interface statemodal{
  StateId:any,
  StateName: any,
  StateCode:any,
  CountryId:any,
  Status:boolean,
  CreatedOn:Date,
  CreatedBy:string
  
 
}

@Component({
  selector: 'app-show-state',
  templateUrl: './show-state.component.html',
  styleUrls: ['./show-state.component.css']
})
export class ShowStateComponent implements OnInit {

 

  sl:any
  listcountry: any;
  listState: any;
  
  
    constructor(private service:SharedService,private dialog:MatDialog) { }
  
  
  
  
  
    displaycolums: string[] = ['StateId','StateName','StateCode',
    'CountryId','Status','CreatedOn',
    'CreatedBy']
     statedata!: statemodal[];
     finaldata:any=[];
  
  
   
  
  
  
  
    @ViewChild(MatPaginator) _paginators!:MatPaginator
    @ViewChild(MatSort) _sort!:MatSort
  val:any
    ngOnInit(): void {
       this.loadstate();
   

       this.service.getStateOfSelectedCountry(this.val).subscribe(data=>{
        this.listState = data;
        console.log('States Retrieved', this.listState);



      })
  
    }
  
  
  
  
  
    openpopup(StateId:any){
      const _popup =  this.dialog.open(AddStateComponent,{
        width:'500px',
        data: {
          StateId : StateId
        }
        
      })
      _popup.afterClosed().subscribe(r => {
        this.loadstate()
      })
    }
  


    loadstate() {
      this.service.getallstate().subscribe(res => {
        this.statedata = res;
        this.finaldata=new MatTableDataSource<statemodal>(this.statedata);
        this.finaldata.paginator=this._paginators
        this.finaldata.sort=this._sort
        })
    }
  
  
  
    
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.finaldata.filter = filterValue.trim().toLowerCase();
  
      if (this.finaldata.paginator) {
        this.finaldata.paginator.firstPage();
      }
    }
  
  
    
  
    private fetchCountry(){
      this.service.getCountry().subscribe(data=>{
      this.listcountry = data
      console.log('Countries fetched', this.listcountry)
      })
    }
    onCountrySelected(val:any){
      this.service.getStateOfSelectedCountry(val).subscribe(data=>{
        this.listState = data;
        console.log('States Retrieved', this.listState);



      })
    }
   onStateSelected(){
  }
  
  
    
  
  
  }
  
  
  
  
  


