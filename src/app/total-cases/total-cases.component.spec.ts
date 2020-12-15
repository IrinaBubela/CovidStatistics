import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCasesComponent } from './total-cases.component';

describe('TotalCasesComponent', () => {
  let component: TotalCasesComponent;
  let fixture: ComponentFixture<TotalCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
