import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
    constructor (private router: Router){}

    status1 = false;
    status2 = false;
    status3 = false;

    ngOnInit(): void {    }
  
  //card 클릭 시 해당 태그 이미지 보여주기
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

    transPage(tag: string){
        this.router.navigate([tag])
    }

}