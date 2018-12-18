import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutypesComponent } from './menutypes.component';

describe('MenutypesComponent', () => {
  let component: MenutypesComponent;
  let fixture: ComponentFixture<MenutypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
