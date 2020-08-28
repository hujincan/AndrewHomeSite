import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSkillButtonComponent } from './chip-skill-button.component';

describe('ChipSkillButtonComponent', () => {
  let component: ChipSkillButtonComponent;
  let fixture: ComponentFixture<ChipSkillButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipSkillButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipSkillButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
