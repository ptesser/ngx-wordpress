import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWordpressApiComponent } from './ng-wordpress-api.component';

describe('NgWordpressApiComponent', () => {
  let component: NgWordpressApiComponent;
  let fixture: ComponentFixture<NgWordpressApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWordpressApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWordpressApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
