import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

let routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./users/users.module').then(value => value.UsersModule)},
      {path: 'posts', loadChildren: () => import('./posts/posts.module').then(value => value.PostsModule)},
      {path: 'comments', loadChildren: () => import('./comments/comments.module').then(value => value.CommentsModule)},
    ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
