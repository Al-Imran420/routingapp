import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildBComponent } from './about-child-b.component';

describe('AboutChildBComponent', () => {
  let component: AboutChildBComponent;
  let fixture: ComponentFixture<AboutChildBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChildBComponent]
    });
    fixture = TestBed.createComponent(AboutChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
