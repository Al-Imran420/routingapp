import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildDetailsAComponent } from './about-child-details-a.component';

describe('AboutChildDetailsAComponent', () => {
  let component: AboutChildDetailsAComponent;
  let fixture: ComponentFixture<AboutChildDetailsAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChildDetailsAComponent]
    });
    fixture = TestBed.createComponent(AboutChildDetailsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
