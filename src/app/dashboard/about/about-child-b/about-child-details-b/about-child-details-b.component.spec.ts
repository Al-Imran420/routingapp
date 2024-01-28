import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildDetailsBComponent } from './about-child-details-b.component';

describe('AboutChildDetailsBComponent', () => {
  let component: AboutChildDetailsBComponent;
  let fixture: ComponentFixture<AboutChildDetailsBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChildDetailsBComponent]
    });
    fixture = TestBed.createComponent(AboutChildDetailsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
