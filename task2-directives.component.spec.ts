import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2DirectivesComponent } from './task2-directives.component';

describe('Task2DirectivesComponent', () => {
  let component: Task2DirectivesComponent;
  let fixture: ComponentFixture<Task2DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2DirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
