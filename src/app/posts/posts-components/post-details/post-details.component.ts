import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostDataService} from "../../posts-services/post-data.service";
import {IPost} from "../../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;
  constructor(private activatedRoute: ActivatedRoute, private postDataService: PostDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.postDataService.getById(id).subscribe(value => this.post = value);
    })
  }

}
