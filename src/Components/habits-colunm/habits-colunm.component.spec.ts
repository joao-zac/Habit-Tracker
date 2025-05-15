import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsColunmComponent } from './habits-colunm.component';

describe('HabitsColunmComponent', () => {
  let component: HabitsColunmComponent;
  let fixture: ComponentFixture<HabitsColunmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitsColunmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitsColunmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
