import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../shared/account-service';
import { LoggingService } from '../shared/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({
      name: accountName,
      status: accountStatus
    })
    this.loggingService.logStatusChange(accountStatus);
  }
}
