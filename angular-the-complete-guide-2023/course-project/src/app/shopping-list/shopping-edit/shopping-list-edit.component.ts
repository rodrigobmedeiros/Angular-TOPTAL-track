import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;
  ingredientToEditId: number;
  editMode: boolean = false;
  ingredientToEdit:  Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.ingredientToEdit.subscribe((index: number) => {
      this.editMode = true;
      this.ingredientToEditId = index;
      this.ingredientToEdit = this.shoppingListService.getIngredient(this.ingredientToEditId);
      this.form.setValue({
        name: this.ingredientToEdit.name,
        amount: this.ingredientToEdit.amount
      })
    })
  }
  
  public onSubmit(form: NgForm): void {
    const formValue = form.value;
    const ingredient = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.ingredientToEditId, ingredient);

    } 
    else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.onClear();
  }

  public onDelete(): void {
    this.shoppingListService.deleteIngredient(this.ingredientToEditId);
    this.onClear();

  }

  public onClear() {
    this.form.reset();
    this.editMode = false;
  }
}
