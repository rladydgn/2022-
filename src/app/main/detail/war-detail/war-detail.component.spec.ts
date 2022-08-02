import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarDetailComponent } from './war-detail.component';

describe('WarDetailComponent', () => {
  let component: WarDetailComponent;
  let fixture: ComponentFixture<WarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
