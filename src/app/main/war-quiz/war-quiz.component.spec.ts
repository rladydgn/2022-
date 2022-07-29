import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarQuizComponent } from './war-quiz.component';

describe('WarQuizComponent', () => {
  let component: WarQuizComponent;
  let fixture: ComponentFixture<WarQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
