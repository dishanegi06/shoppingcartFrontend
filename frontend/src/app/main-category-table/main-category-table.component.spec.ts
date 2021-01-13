import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryTableComponent } from './main-category-table.component';

describe('MainCategoryTableComponent', () => {
  let component: MainCategoryTableComponent;
  let fixture: ComponentFixture<MainCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
