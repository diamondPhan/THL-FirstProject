import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagereplyService } from '../services/managereply.service';
import { ManagequestionService } from '../services/managequestion.service';
import { reply } from '../model/replylist';

@Component({
  selector: 'app-replylist',
  templateUrl: './replylist.component.html',
  styleUrls: ['./replylist.component.css']
})
export class ReplylistComponent implements OnInit {
getID:any;
  getName: string;
  replies:reply[];
  constructor(private route:ActivatedRoute,private router:Router, private managereplyService:ManagereplyService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getID=id;
    let name = this.route.snapshot.paramMap.get('getName');
    console.log(name);
    this.getName=name;
    
    this.managereplyService.getReplyList().subscribe(data => {
      this.replies = data.map(e => {
        const data = e.payload.doc.data() as reply;
        const id= e.payload.doc.id;
       
        return {
        id, ...data
        } 
      })
      console.log(this.replies);
      
    });
  }

}
