import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndFeaturesComponent } from './and-features.component';

describe('AndFeaturesComponent', () => {
  let component: AndFeaturesComponent;
  let fixture: ComponentFixture<AndFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
