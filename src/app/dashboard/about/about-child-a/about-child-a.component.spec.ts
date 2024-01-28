import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildAComponent } from './about-child-a.component';

describe('AboutChildAComponent', () => {
  let component: AboutChildAComponent;
  let fixture: ComponentFixture<AboutChildAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChildAComponent]
    });
    fixture = TestBed.createComponent(AboutChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
