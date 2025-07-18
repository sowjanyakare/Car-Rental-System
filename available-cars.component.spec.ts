import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCarsComponent } from './available-cars.component';

describe('AvailableCarsComponent', () => {
  let component: AvailableCarsComponent;
  let fixture: ComponentFixture<AvailableCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
