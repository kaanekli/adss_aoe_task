import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsdetailComponent } from './unitsdetail.component';

describe('UnitsdetailComponent', () => {
  let component: UnitsdetailComponent;
  let fixture: ComponentFixture<UnitsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
