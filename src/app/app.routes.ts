import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
