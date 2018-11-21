import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBannerComponent } from './delivery-banner.component';

describe('DeliveryBannerComponent', () => {
  let component: DeliveryBannerComponent;
  let fixture: ComponentFixture<DeliveryBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
