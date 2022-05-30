import { Component, OnInit } from '@angular/core';
import {PostDataService} from "../../posts-services/post-data.service";
import {IPost} from "../../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];
  constructor(private postDataService: PostDataService) { }

  ngOnInit(): void {
    this.postDataService.getAll().subscribe(value => this.posts = value);
  }

}
