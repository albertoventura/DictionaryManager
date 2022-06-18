import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDicComponent } from './edit-dic.component';

describe('EditDicComponent', () => {
  let component: EditDicComponent;
  let fixture: ComponentFixture<EditDicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
