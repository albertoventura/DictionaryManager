import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWordsComponent } from './filter-words.component';

describe('FilterWordsComponent', () => {
  let component: FilterWordsComponent;
  let fixture: ComponentFixture<FilterWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
