import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcasPage } from './calcas.page';

describe('CalcasPage', () => {
  let component: CalcasPage;
  let fixture: ComponentFixture<CalcasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalcasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
