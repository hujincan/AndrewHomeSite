import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {BlogComponent} from './blog/blog/blog.component';
import {UsesComponent} from './uses/uses/uses.component';
import {PhotosComponent} from './photos/photos/photos.component';
import {MdPageComponent} from './blog/md/md-page/md-page.component';
import {BlogCardComponent} from './blog/blog-card/blog-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent,
  children: [
    { path: '',
      component: BlogCardComponent},
    { path: 'md-page/:id',
    component: MdPageComponent}
  ]},
  { path: 'uses', component: UsesComponent},
  { path: 'photos', component: PhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
