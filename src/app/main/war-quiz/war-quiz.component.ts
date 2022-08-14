import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-war-quiz',
  templateUrl: './war-quiz.component.html',
  styleUrls: ['./war-quiz.component.scss']
})
export class WarQuizComponent implements OnInit {
  index: number = 0;
  constructor(private warQuizData: DataService) { }

  items : any;
  ngOnInit(): void {
    this.getQuizData();
  }

  getQuizData(){
    this.warQuizData.getData(2).subscribe(data => {
      console.log(data);
      this.items = data;
    })
  }

  isclick: boolean = false;
  answer(){
    if (this.isclick === false){
      this.isclick = true;
    }
    else{
      this.isclick = false;
    }
  }

}
