import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {SharedService} from 'src/app/shared.service';
interface sidenavtoggle {
  screenwidth: number;
  collapsed:boolean;
  
}


@Component({
  selector: 'app-add-edit-tax',
  templateUrl: './add-edit-tax.component.html',
  styleUrls: ['./add-edit-tax.component.css']
})
export class AddEditTaxComponent implements OnInit {

  constructor(private service:SharedService,private dialog:MatDialog) { }

  @Input() tax:any;
  TaxmasterId!: string;
  Taxpercent!: string;

 

  ngOnInit(): void {
    this.TaxmasterId=this.tax.TaxmasterId;
    this.Taxpercent=this.tax.Taxpercent;

  }

 
 

  addTaxmaster(){
    var val = {TaxmasterId:this.TaxmasterId,
      Taxpercent:this.Taxpercent};
    this.service.addTaxMaster(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTaxmaster(){
    var val = {TaxmasterId:this.TaxmasterId,
      Taxpercent:this.Taxpercent};
    this.service.updateTaxMaster(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}