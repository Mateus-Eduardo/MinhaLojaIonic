import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamisasPage } from './camisas.page';

describe('CamisasPage', () => {
  let component: CamisasPage;
  let fixture: ComponentFixture<CamisasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamisasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
