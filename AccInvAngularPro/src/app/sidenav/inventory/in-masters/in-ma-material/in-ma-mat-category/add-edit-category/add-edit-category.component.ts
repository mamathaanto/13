import { formatDate } from '@angular/common';
import { Component, OnInit , Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})

export class AddEditCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cat:any;
  ItemCategoryId: any;
  ItemCategory: any;
  ParentId:any;
  Status:any;
  CreatedOn:any;
  CreatedBy:any;
  ItemCategoryList:any=[];

  ngOnInit(): void {
    this.service.getAllItemCategory().subscribe((data:any)=>{
      this.ItemCategoryList=data;
      this.ItemCategoryId=this.cat.ItemCategoryId;
      this.ItemCategory=this.cat.ItemCategory;
      this.ParentId=this.cat.ParentId;
      this.Status=this.cat.Status;
      this.CreatedOn = formatDate(new Date(),'yyyy-MM-dd','en_US');;
      this.CreatedBy=this.cat.CreatedBy;
    })
  }


  loadItemCategoryList(){
    this.service.getItemCategoryList().subscribe((data:any)=>{
      this.ItemCategoryList=data;
      this.ItemCategoryId=this.cat.ItemCategoryId;
      this.ItemCategory=this.cat.ItemCategory;
      this.ParentId=this.cat.ParentId;
      this.Status=this.cat.Status;
      this.CreatedOn=this.cat.CreatedOn;
      this.CreatedBy=this.cat.CreatedBy;
    })
  }

  

  addItemCategory(){
    var val = {ItemCategoryId:this.ItemCategoryId,
      ItemCategory:this.ItemCategory ,ParentId:this.ParentId, Status:this.Status,CreatedOn:this.CreatedOn,CreatedBy:this.CreatedBy};
    this.service.addItemCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateItemCategory(){
    var val = {ItemCategoryId:this.ItemCategoryId,
      ItemCategory:this.ItemCategory ,ParentId:this.ParentId,Status:this.Status,CreatedOn:this.CreatedOn,CreatedBy:this.CreatedBy};
    this.service.updateItemCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
