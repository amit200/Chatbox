import { ChatService } from './../chat.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inner-nav',
  templateUrl: './inner-nav.component.html',
  styleUrls: ['./inner-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnerNavComponent implements OnInit, OnChanges {
  @Input() arry: any;
  selectedPerson: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}
  ngOnInit(): void {
    this.selectedPerson = this.route.snapshot.queryParams['item'];
  }
  ngOnChanges(changs: SimpleChanges) {}
  showFiller = false;

  onSelectedChat(item: any) {
    // item = JSON.stringify(item);

    this.router.navigate([], { queryParams: { item: item.name } });
    this.selectedPerson = this.route.snapshot.queryParams['item'];
    console.log(this.selectedPerson);
  }
}
