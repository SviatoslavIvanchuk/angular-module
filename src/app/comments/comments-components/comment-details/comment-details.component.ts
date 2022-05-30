import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../../interfaces";
import {CommentsDataService} from "../../comments-services/comments-data.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;
  constructor(private activatedRoute: ActivatedRoute, private commentsDataService: CommentsDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.commentsDataService.getById(id).subscribe(value => this.comment = value);
    })
  }

}
