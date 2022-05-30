import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces";
import {CommentsDataService} from "../../comments-services/comments-data.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;
  constructor(private commentsDataService: CommentsDataService) { }

  ngOnInit(): void {
  }

}
