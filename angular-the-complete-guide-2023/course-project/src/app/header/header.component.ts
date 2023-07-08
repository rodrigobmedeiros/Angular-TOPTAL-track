import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  collapsed = true;

  constructor(private dataStorage: DataStorageService) {}

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
