import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildDetailsBComponent } from './home-child-details-b.component';

describe('HomeChildDetailsBComponent', () => {
  let component: HomeChildDetailsBComponent;
  let fixture: ComponentFixture<HomeChildDetailsBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChildDetailsBComponent]
    });
    fixture = TestBed.createComponent(HomeChildDetailsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
