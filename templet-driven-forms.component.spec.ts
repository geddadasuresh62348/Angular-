import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletDrivenFormsComponent } from './templet-driven-forms.component';

describe('TempletDrivenFormsComponent', () => {
  let component: TempletDrivenFormsComponent;
  let fixture: ComponentFixture<TempletDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletDrivenFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
