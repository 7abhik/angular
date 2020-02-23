import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() likeCount: number;
  constructor() { }

  ngOnInit() {
  }

  isSelected() {
    this.isActive = !this.isActive;
    this.likeCount += (this.isActive) ? +1 : -1;
    console.log(this.likeCount);
  }

}
