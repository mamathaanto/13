import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  @Input() collapsed=false;
  @Input() screenwidth=0;

  constructor() { }

  ngOnInit(): void {
  }
  getbodyclass(): string{
    let styleclass='';
    if(this.collapsed&&this.screenwidth>200){
      styleclass='body-trimmed';
    }
    else if(this.collapsed &&this.screenwidth <= 1000 && this.screenwidth >0){
      styleclass='body-md-screen'
    }
    return styleclass
  }

}
