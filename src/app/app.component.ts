import { FavoriteChanageArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Some tweet is here....',
    isLiked: true,
    likeCount: 10,
    asignee: {
      name: 'Abhishek'
    }
  };
  onFavoriteChange(eventArgs: FavoriteChanageArgs) {
    console.log('Favorite has changed!! ', eventArgs);
  }
}
