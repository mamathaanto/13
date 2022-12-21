import { Component, EventEmitter, HostListener, Output } from '@angular/core';
interface sidenavtoggle {
  screenwidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'sidenav';

  collapsed=false
  issidenavcollapsed=false;
  screenwidth=0;


  innerwidth:any;

  ngOnInit():void{
    this.innerwidth=window.innerWidth;
  }
 
  ontogglesidenav(data:sidenavtoggle):void{
    this.screenwidth=data.screenwidth;
    this.issidenavcollapsed=data.collapsed
}




@HostListener('window:resize',['$event'])
onResize(event:any){
  this.innerwidth=window.innerWidth
 }
}