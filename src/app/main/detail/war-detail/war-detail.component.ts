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
  isClick: boolean = false;
  index: number = 0;
  ngOnInit(): void {
    this.getData();
  }
  
  items: any;
  // items = [{title: 'test1', content: 'ghghhfhfhfhfdjfiewojfwiejfoghghhfhfhfhfd\njfi\r\r\r\r\rewojfwiejfoghghhghghhfhfhfhfdjfiewojfwiejfoghghhfhfhfhfdghghhfhfhfhfdjfiewojfwiejfofhfhfdjfiewojfwiejfoghghhfhfhfhfdghghhfhfhfhfdjfiewojfwiejfoghghhfhfhfhfdghghhfhfhfhfdjfiewojfwiejfoghghhfhfhfhfdfhfhfhfdj\nfiewojfwiejfoghghhfhfhfhfdjfiew\nojfwiejfoghghhfhfhfhfdjfiewojfwiejfoghghhfhfhfhfdjfiewojfwiejfo'},
  // {title: 'test2', content: 'ghghhfhfhfhdfdfdfdfdjfiewojfwiejfo'},
  // {title: 'test3', content: 'ghghhfhfhfhfdjfiewojfwiejfffdfo'},{title: 'test4', content: 'ghghhfhfhfhdfasdfdfdfdfdjfiewojfwiejfo'},
  // {title: 'test5', content: 'ghghhfhfhfhfdjfiewojfwieasdfjfo'},{title: 'test6', content: 'ghgasdfhhfhfhfhdfdfdfdfdjfiewojfwiejfo'}]
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
    this.data.getData(0).subscribe((data) =>{
      this.items = data;
      console.log(this.items);
    })
  }
  
  detailContent(idx: number){
    console.log(idx);
    if (this.isClick === false || this.items[idx].content != this.items[this.index].content){
      this.isClick = true;
    }
    else{
      this.isClick = false;
    }
    this.index = idx
  }

}
