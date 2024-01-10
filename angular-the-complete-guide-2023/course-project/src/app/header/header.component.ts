import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthUserService } from '../auth/auth-user/auth-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  isAuthenticated: boolean = false;
  userSubscription: Subscription;
  collapsed = true;

  constructor(private dataStorage: DataStorageService, private authService: AuthUserService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onSelect(featureSelected: string): void {
    this.featureSelected.emit(featureSelected);
  }

  onSave() {
    this.dataStorage.saveRecipes();
  }

  onFetch() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
