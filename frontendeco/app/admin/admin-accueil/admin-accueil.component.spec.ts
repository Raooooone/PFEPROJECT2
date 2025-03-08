import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceuilComponent } from './admin-accueil.component';

describe('AdminAccueilComponent', () => {
  let component: AdminAcceuilComponent;
  let fixture: ComponentFixture<AdminAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAcceuilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
