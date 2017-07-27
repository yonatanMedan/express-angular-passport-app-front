import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteDetailComponent } from './web-site-detail.component';

describe('WebSiteDetailComponent', () => {
  let component: WebSiteDetailComponent;
  let fixture: ComponentFixture<WebSiteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSiteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSiteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
