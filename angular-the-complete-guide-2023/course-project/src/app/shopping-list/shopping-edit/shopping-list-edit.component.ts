import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}
  
  public onAdd(form: NgForm) {
    const formValue = form.value;
    const ingredient = new Ingredient(formValue.name, formValue.amount);
    this.shoppingListService.addIngredient(ingredient);
  }

  public onDelete() {
    alert('Delete Button was Clicked!')
  }

  public onClear() {
    alert('Clear Button was Clicked!')
  }
}
