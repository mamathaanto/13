import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemUnitmodal } from './itemunit.modal';
@Component({
  selector: 'app-in-ma-mat-unit',
  templateUrl: './in-ma-mat-unit.component.html',
  styleUrls: ['./in-ma-mat-unit.component.css']
})
export class InMaMatUnitComponent implements OnInit {
  parentidinput: boolean=false;
  constructor(private dialog:MatDialog) { }
  
  public itemunit:any=[]
  

  ngOnInit(): void {
  }

   currentdate=new Date();

   unitcase(val:any){
    if(this.itemunit=='case'){
           this.parentidinput=true
          
  }
    
    //  this.parentidinput=!this.parentidinput
  }

    //  applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //    this.itemunit.filter = filterValue.trim().toLowerCase();
    //    if(this.itemunit.filter=='case'){
    //       this.parentidinput=true
        
    //  }
    

    // }


  
   
  
  

 

}
