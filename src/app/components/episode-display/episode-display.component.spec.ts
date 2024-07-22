import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDisplayComponent } from './episode-display.component';

describe('EpisodeDisplayComponent', () => {
  let component: EpisodeDisplayComponent;
  let fixture: ComponentFixture<EpisodeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
