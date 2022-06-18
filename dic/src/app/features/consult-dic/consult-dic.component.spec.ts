import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDicComponent } from './consult-dic.component';

describe('ConsultDicComponent', () => {
  let component: ConsultDicComponent;
  let fixture: ComponentFixture<ConsultDicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
