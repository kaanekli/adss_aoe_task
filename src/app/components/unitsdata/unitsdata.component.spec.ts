import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsdataComponent } from './unitsdata.component';

describe('UnitsdataComponent', () => {
  let component: UnitsdataComponent;
  let fixture: ComponentFixture<UnitsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
