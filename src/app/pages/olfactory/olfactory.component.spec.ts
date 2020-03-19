import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfactoryComponent } from './olfactory.component';

describe('OlfactoryComponent', () => {
  let component: OlfactoryComponent;
  let fixture: ComponentFixture<OlfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlfactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
