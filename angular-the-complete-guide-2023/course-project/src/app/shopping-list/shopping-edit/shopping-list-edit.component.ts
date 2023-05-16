import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('inputName', {static: false}) nameField: ElementRef;
  @ViewChild('inputAmount', {static: false}) amountField: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  public onAdd() {
    const name = this.nameField.nativeElement.value;
    const amount = this.amountField.nativeElement.value;
    const ingredient = new Ingredient(name, +amount);
    this.ingredientAdded.emit(ingredient);
    alert('Add Button was Clicked!')
  }

  public onDelete() {
    alert('Delete Button was Clicked!')
  }

  public onClear() {
    alert('Clear Button was Clicked!')
  }
}
