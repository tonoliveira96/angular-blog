import { Component } from '@angular/core';
import { fakePosts, PostsProps } from '../../../data/fake-data';
import { CardBigComponent } from '../../components/card-big/card-big.component';
import { CardSmallComponent } from '../../components/card-small/card-small.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, CardBigComponent, CardSmallComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: PostsProps[] = [];

  constructor(){
    if(fakePosts){
      this.posts = fakePosts
    }
  }
}
