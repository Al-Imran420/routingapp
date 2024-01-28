import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildDetailsComponent } from './home-child-details.component';

describe('HomeChildDetailsComponent', () => {
  let component: HomeChildDetailsComponent;
  let fixture: ComponentFixture<HomeChildDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChildDetailsComponent]
    });
    fixture = TestBed.createComponent(HomeChildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
