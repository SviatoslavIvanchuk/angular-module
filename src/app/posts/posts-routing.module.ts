import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostResolver} from "./posts-services/resolvers/post.resolver";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolver}}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
