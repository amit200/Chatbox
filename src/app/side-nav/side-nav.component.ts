import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChatService } from '../components/chat.service';
import { getUrlScheme } from '@angular/compiler';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [ChatService],
})
export class SideNavComponent implements OnInit {
  isToggle: boolean = false;
  itm: any = [];
  userInfo: any = [];
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private cdr: ChangeDetectorRef
  ) {
    // this.chatService.mySunjct.subscribe((rs) => {
    //   console.log(rs);
    //   console.log(this.chatService.p);
    // })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.userInfo = this.chatService.gUsr(res['item']);
      if (this.userInfo.length > 0) {
        this.userInfo = this.userInfo[0];
      }
      console.log(this.userInfo);
      // console.log(JSON.parse(res));
      // this.userInfo = res;
      // console.log(this.userInfo.item);
      // console.log((this.userInfo = JSON.parse(res)));
    });

    this.itm = this.chatService.gtusr();
  }

  showFiller = false;
  showChatBox() {
    this.isToggle = !this.isToggle;
    this.cdr.detectChanges();

    // console.log(this.isToggle);
  }
}
