import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDicComponent } from './list-dic.component';

describe('ListDicComponent', () => {
  let component: ListDicComponent;
  let fixture: ComponentFixture<ListDicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
