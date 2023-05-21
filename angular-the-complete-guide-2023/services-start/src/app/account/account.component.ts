import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../shared/account-service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.ChangeAccountStatus({id: this.id, newStatus: status});
  }
}
