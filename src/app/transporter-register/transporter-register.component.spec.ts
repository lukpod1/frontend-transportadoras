import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterRegisterComponent } from './transporter-register.component';

describe('TransporterRegisterComponent', () => {
  let component: TransporterRegisterComponent;
  let fixture: ComponentFixture<TransporterRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporterRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
