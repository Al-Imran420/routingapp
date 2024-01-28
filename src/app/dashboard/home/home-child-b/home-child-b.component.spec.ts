import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildBComponent } from './home-child-b.component';

describe('HomeChildBComponent', () => {
  let component: HomeChildBComponent;
  let fixture: ComponentFixture<HomeChildBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChildBComponent]
    });
    fixture = TestBed.createComponent(HomeChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
