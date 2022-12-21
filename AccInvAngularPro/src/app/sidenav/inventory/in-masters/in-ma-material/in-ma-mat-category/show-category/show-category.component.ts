import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  ItemCategoryList:any=[];

  ModalTitle:any;
  ActivateAddEditItemCategory:boolean=false;
  cat:any;

  ItemCategoryIdFilter:string="";
  ItemCategoryFilter:string="";
  ParentIdFilter:string="";
  StatusFilter:string="";
  CreatedOnFilter:string="";
  CreatedByFilter:string="";
  ItemCategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshItemCategory();
  }

  addClick(){
    this.cat={
      ItemCategoryId:0,
      ItemCategory:"",
      ParentId:"",
      Status:"",
      CreatedOn:"",
      CreatedBy:"",
    }
    this.ModalTitle="Add ItemCategory";
    this.ActivateAddEditItemCategory=true;

  }

  editClick(item: any){
    this.cat=item;
    this.ModalTitle="Edit ItemCategory";
    this.ActivateAddEditItemCategory=true;
  }

  deleteClick(item: { ItemCategoryId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteItemCategory(item.ItemCategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshItemCategory();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditItemCategory=false;
    this.refreshItemCategory();
  }


  refreshItemCategory(){
    this.service.getItemCategoryList().subscribe(data=>{
      this.ItemCategoryList=data;
      this.ItemCategoryListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ItemCategoryIdFilter = this.ItemCategoryIdFilter;
    var ItemCategoryFilter = this.ItemCategoryFilter;
    var ParentIdFilter = this.ParentIdFilter;
    var StatusFilter = this.StatusFilter;
    var CreatedOnFilter = this.CreatedOnFilter;
    var CreatedByFilter = this.CreatedByFilter;

    this.ItemCategoryList = this.ItemCategoryListWithoutFilter.filter(function (el: { ItemCategoryId: { toString: () => string; }; ItemCategory: { toString: () => string; };ParentId: { toString: () => string; }; Status: { toString: () => string; };CreatedOn: { toString: () => string; };CreatedBy: { toString: () => string; };}){
        return el.ItemCategoryId.toString().toLowerCase().includes(
          ItemCategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.ItemCategory.toString().toLowerCase().includes(
          ItemCategoryFilter.toString().trim().toLowerCase()
        )&&
        el.ParentId.toString().toLowerCase().includes(
          ParentIdFilter.toString().trim().toLowerCase()
        )&&
        el.Status.toString().toLowerCase().includes(
          StatusFilter.toString().trim().toLowerCase()
        )&&
        el.CreatedOn.toString().toLowerCase().includes(
          CreatedOnFilter.toString().trim().toLowerCase()
        )&&
        el.CreatedOn.toString().toLowerCase().includes(
          CreatedOnFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.ItemCategoryList = this.ItemCategoryListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
