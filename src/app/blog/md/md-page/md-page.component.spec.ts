import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdPageComponent } from './md-page.component';

describe('MdPageComponent', () => {
  let component: MdPageComponent;
  let fixture: ComponentFixture<MdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
