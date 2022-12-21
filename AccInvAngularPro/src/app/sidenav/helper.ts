import { animate, style, transition, trigger } from "@angular/animations";
export interface inavbardata{
    routeLink:string;
    icon?:string;
    label:string;
    expanded?:boolean;
    items?: inavbardata[];
}