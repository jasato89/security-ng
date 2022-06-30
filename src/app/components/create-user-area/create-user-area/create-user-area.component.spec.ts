import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserAreaComponent } from './create-user-area.component';

describe('CreateUserAreaComponent', () => {
  let component: CreateUserAreaComponent;
  let fixture: ComponentFixture<CreateUserAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
