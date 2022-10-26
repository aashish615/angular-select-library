import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatSelectComponent } from './ng-mat-select.component';

describe('NgMatSelectComponent', () => {
  let component: NgMatSelectComponent;
  let fixture: ComponentFixture<NgMatSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMatSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
