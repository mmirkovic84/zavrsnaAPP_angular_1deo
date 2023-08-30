import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSidebarComponent } from './social-sidebar.component';

describe('SocialSidebarComponent', () => {
  let component: SocialSidebarComponent;
  let fixture: ComponentFixture<SocialSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialSidebarComponent]
    });
    fixture = TestBed.createComponent(SocialSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
