import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerTeamDetailComponent } from './soccer-team-detail.component';

describe('SoccerTeamDetailComponent', () => {
  let component: SoccerTeamDetailComponent;
  let fixture: ComponentFixture<SoccerTeamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerTeamDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
