import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('inputName', {static: false}) nameField: ElementRef;
  @ViewChild('inputAmount', {static: false}) amountField: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}
  
  public onAdd() {
    const name = this.nameField.nativeElement.value;
    const amount = this.amountField.nativeElement.value;
    const ingredient = new Ingredient(name, +amount);
    this.shoppingListService.addIngredient(ingredient);
  }

  public onDelete() {
    alert('Delete Button was Clicked!')
  }

  public onClear() {
    alert('Clear Button was Clicked!')
  }
}
