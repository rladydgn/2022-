import { Component, OnInit } from "@angular/core";

@Component ({
    selector:'main',
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.scss']
})

export class MainComponent implements OnInit{
    status1 = false;
    status2 = false;
    status3 = false;
    ngOnInit(): void {    }
    onSave(clicked: string){
        if (clicked === 'war'){
            if (this.status1 === true){
                this.status1 = false
            }
            else {
                this.status1 = true;
                this.status2 = false;
                this.status3 = false;
            }
        }
        else if (clicked === 'history'){
            if (this.status2 === true){
                this.status2 = false
            }
            else {
                this.status1 = false;
                this.status2 = true;
                this.status3 = false;
            }
        }
        else{
            if (this.status3 === true){
                this.status3 = false
            }
            else {
                this.status1 = false;
                this.status2 = false;
                this.status3 = true;
            }
        }
    }
}