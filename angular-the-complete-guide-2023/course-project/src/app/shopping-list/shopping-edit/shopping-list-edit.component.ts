import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  public onAdd() {
    alert('Add Button was Clicked!')
  }

  public onDelete() {
    alert('Delete Button was Clicked!')
  }

  public onClear() {
    alert('Clear Button was Clicked!')
  }
}
