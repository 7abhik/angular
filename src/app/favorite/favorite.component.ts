import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }

}

export class FavoriteChanageArgs {
  newValue: boolean;
}
