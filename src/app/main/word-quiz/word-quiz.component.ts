import { Component, OnInit } from '@angular/core';
import { DataService, quizData } from 'src/app/data.service';

@Component({
  selector: 'app-word-quiz',
  templateUrl: './word-quiz.component.html',
  styleUrls: ['./word-quiz.component.scss']
})
export class WordQuizComponent implements OnInit {
  index: number = 0;
  constructor(private wordQuizData: DataService) { }

  items : any;
  ngOnInit(): void {
    this.getQuizData();
  }

  getQuizData(){
    this.wordQuizData.getData(1).subscribe(data => {
      console.log(data);
      this.items = data;
    })
  }
}
