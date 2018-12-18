import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodegeneratorComponent } from './qrcodegenerator.component';

describe('QrcodegeneratorComponent', () => {
  let component: QrcodegeneratorComponent;
  let fixture: ComponentFixture<QrcodegeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodegeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
