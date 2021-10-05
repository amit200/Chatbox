import { ChatService } from './../chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit {
  image: any;
  userInfo: any = [];
  arry: any = [];
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.userInfo = this.chatService.gUsr(res['item']);
      if (this.userInfo.length > 0) {
        this.userInfo = this.userInfo[0];
      }
      // console.log(this.userInfo.chat);
      // console.log(JSON.parse(res));
      // this.userInfo = res;
      // console.log(this.userInfo.item);
      // console.log((this.userInfo = JSON.parse(res)));
    });
  }
  filechange(event: any) {
    // console.log(image);
    const reader = new FileReader();
    reader.onload = (e) => {
      this.image = reader.result;
      this.chatService.uploadImage(this.userInfo.name, this.image);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
