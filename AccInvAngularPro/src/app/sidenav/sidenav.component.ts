import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { inavbardata } from './helper';
import { navbardata } from './nav-data';


interface sidenavtoggle {
  screenwidth: number;
  collapsed:boolean;
  
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[trigger('fadeIn',[transition(':enter',[style({opacity:0}),animate('350ms',style({opacity:1})
  )
]),
transition(':leave',[style({opacity:1}),animate('350ms',style({opacity:0})
)
])
]),
trigger('rotate',[transition(':enter',[animate('1000ms',keyframes([
  style({transform:'rotate(0deg)',offset:'0'}),
  style({transform:'rotate(2turn)',offset:'1'})]))])])
]
})

export class SidenavComponent implements OnInit {

  @Output() ontogglesidenav:EventEmitter<sidenavtoggle>= new EventEmitter();


  constructor(public router:Router) { }
  // displaymenu=false;

  // ngDoCheck(): void {
  //   if ((this.router.url == '/login')||(this.router.url == '/register')) {
  //     this.displaymenu = false
  //   } else {
  //     this.displaymenu = true
  //   }
  // }
  collapsed=false;
  screenwidth=0
  navdata=navbardata;
  multiple:boolean=false;
 
  

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenwidth=window.innerWidth;
    if(this.screenwidth <= 1000){
      this.collapsed=false;
      this.ontogglesidenav.emit(
        {collapsed:this.collapsed, screenwidth:this.screenwidth}
        )
    }
  }

  ngOnInit(): void {
    this.screenwidth=window.innerWidth
  }


  togglecollapse():void{
    this.collapsed = !this.collapsed;
    this.ontogglesidenav.emit(
       {collapsed:this.collapsed,screenwidth:this.screenwidth}
      )

  }
  closesidenav():void{
    this.collapsed= false
    this.ontogglesidenav.emit(
       {collapsed:this.collapsed,screenwidth:this.screenwidth}
      )

  }

  handleclick(item: inavbardata): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  shrinkItems(item: inavbardata): void {
    if (!this.multiple) {
      for(let modelItem of this.navdata) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

  // handleclick(item: inavbardata) :void{
  //   if(!this.multiple){
  //     for(let modelitem of this.navdata){
  //       if(item !==modelitem && modelitem.expanded){
  //         modelitem.expanded=false;
  //       }
  //     }
  //   }
  //   item.expanded =!item.expanded
  // }

  getActiveClass(data: inavbardata): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

}
