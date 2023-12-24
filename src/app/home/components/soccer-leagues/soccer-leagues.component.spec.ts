import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerLeaguesComponent } from './soccer-leagues.component';

describe('SoccerLeaguesComponent', () => {
  let component: SoccerLeaguesComponent;
  let fixture: ComponentFixture<SoccerLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerLeaguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
