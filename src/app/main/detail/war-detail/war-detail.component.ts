import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, warData } from 'src/app/data.service';
// import { DataService, warData } from '../../data.service';

@Component({
  selector: 'app-war-detail',
  templateUrl: './war-detail.component.html',
  styleUrls: ['./war-detail.component.scss']
})
export class WarDetailComponent implements OnInit {
  constructor (private router: Router, private data: DataService){}

  ngOnInit(): void {
    this.getData();
  }
  
  items: any;
  // items: string[] = ['jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  // ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  // ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  // ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  // ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'
  // ,'jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape','jamong','mango','grape'];
  
  onScroll() {
    console.log("scrolled!!");
  }
  
  transPage(tag: string){
      this.router.navigate([tag])
  }

  getData(){
    this.data.getData().subscribe((data) =>{
      this.items = data;
      console.log(this.items);
    })
  }

}
