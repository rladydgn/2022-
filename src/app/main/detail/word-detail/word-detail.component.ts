import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent implements OnInit {
  constructor (private router: Router){}

    
  ngOnInit(): void {
  }
  

  transPage(tag: string){
      this.router.navigate([tag])
  }

}
