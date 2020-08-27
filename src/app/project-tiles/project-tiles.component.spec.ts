import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTilesComponent } from './project-tiles.component';

describe('ProjectTilesComponent', () => {
  let component: ProjectTilesComponent;
  let fixture: ComponentFixture<ProjectTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
