import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordExtraComponent } from './word-extra.component';

describe('WordExtraComponent', () => {
  let component: WordExtraComponent;
  let fixture: ComponentFixture<WordExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
