import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListEditComponent } from './shopping-list-edit.component';

describe('ShopingListEditComponent', () => {
  let component: ShopingListEditComponent;
  let fixture: ComponentFixture<ShopingListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
