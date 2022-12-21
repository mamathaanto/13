import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { inavbardata } from './helper';


interface sidenavtoggle {
  screenwidth: number;
  collapsed:boolean;
  
}

@Component({
  selector: 'app-sublevelmenu',
  template: `
  <ul class=sublevel-1  *ngIf="collapsed && data.items && data.items.length  > 0"
  [@submenu]="expanded
    ? {value: 'visible', 
        params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
    : {value: 'hidden', 
        params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
    class="sublevel-nav"
  >
    <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a class="sublevel-nav-link"
        (click)="handleclick(item)"
       
        
        [routerLink]="[item.routeLink]"
          *ngIf="item.items && item.items.length > 0 &&collapsed"
          [ngClass]="getActiveClass(item)"
        >
          <i class="sublevel-link-icon fa-sharp fa-solid fa-square"></i>
          <span class="sublevel-link-text" 
              *ngIf="collapsed" (click)=togglecollapse() >{{item.label}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
            [ngClass]="!item.expanded ? 'fa-solid fa-angles-right':'fa-solid fa-angles-down'"
          ></i>
        </a>
        <a class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)" 
          [routerLink]="[item.routeLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact: true}"
        >
          <i class="sublevel-link-icon fa-sharp fa-solid fa-square"></i>
          <span class="sublevel-link-text" 
             *ngIf="collapsed" (click)=togglecollapse() >{{item.label}}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevelmenu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
            
          ></app-sublevelmenu>
        </div>
    </li>
  </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('submenu',[
      state('hidden',style({
        height:'0',
        overflow:'hidden'
      })),
      state('visible',style({
        height:'*'
      })),
      transition('visible <=> hidden',[style({overflow:'hidden'}),
    animate('{{transitionParams}}')]),
    transition('void=>*',animate(0))
    ])]
})
export class SublevelmenuComponent implements OnInit {

  
  @Input() data:inavbardata={
    routeLink:'',
    icon:'',
    label:'',
    items:[]
  }
  @Input() collapsed=false;
  @Input() animating:boolean|undefined
  @Input() expanded:boolean|undefined
  @Input() multiple:boolean=false

  @Output() ontogglesidenav:EventEmitter<sidenavtoggle>= new EventEmitter();

  screenwidth=0

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  handleclick(item:any):void{
    if(!this.multiple){
      if(this.data.items &&this.data.items.length >0){
        for(let modelitem of this.data.items){
          if(item !== modelitem &&modelitem.expanded){
            modelitem.expanded=false;
          }
        }
      }
    }
    item.expanded= !item.expanded
  }

  
  getActiveClass(item: inavbardata): string {
    return item.expanded && this.router.url.includes(item.routeLink) 
      ? 'active-sublevel' 
      : '';
  }

 

  togglecollapse():void{
    this.collapsed = !this.collapsed;
    this.ontogglesidenav.emit(
       {collapsed:this.collapsed,screenwidth:this.screenwidth}
      )

  }
 
 


}
