import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'layout',
    templateUrl:'./type.component.html',
    styleUrls: ['./type.component.scss']
})

export class typeComponent implements OnInit{
    constructor (private router: Router){}
    selectedItem = '3';
    ngOnInit(){    }
    movePage(tag: string){
        this.router.navigate([tag])
    }
}