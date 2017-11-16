import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiclinkComponent } from './dynamiclink.component';

describe('DynamiclinkComponent', () => {
  let component: DynamiclinkComponent;
  let fixture: ComponentFixture<DynamiclinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiclinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiclinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
