import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteListComponent } from './web-site-list.component';

describe('WebSiteListComponent', () => {
  let component: WebSiteListComponent;
  let fixture: ComponentFixture<WebSiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
