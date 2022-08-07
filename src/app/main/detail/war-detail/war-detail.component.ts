import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DataService, warData } from '../../data.service';

@Component({
  selector: 'app-war-detail',
  templateUrl: './war-detail.component.html',
  styleUrls: ['./war-detail.component.scss']
})
export class WarDetailComponent implements OnInit {
  constructor (private router: Router){}

  ngOnInit(): void {
  }
  
  // items: warData[] = [];
  items: string[] = ['jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'];
  
  onScroll() {
    console.log("scrolled!!");
  }
  
  transPage(tag: string){
      this.router.navigate([tag])
  }

}
