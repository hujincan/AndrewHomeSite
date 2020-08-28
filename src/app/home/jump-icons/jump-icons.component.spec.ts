import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpIconsComponent } from './jump-icons.component';

describe('JumpIconsComponent', () => {
  let component: JumpIconsComponent;
  let fixture: ComponentFixture<JumpIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
