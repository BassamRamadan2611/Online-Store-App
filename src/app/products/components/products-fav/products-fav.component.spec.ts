import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFavComponent } from './products-fav.component';

describe('ProductsFavComponent', () => {
  let component: ProductsFavComponent;
  let fixture: ComponentFixture<ProductsFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
