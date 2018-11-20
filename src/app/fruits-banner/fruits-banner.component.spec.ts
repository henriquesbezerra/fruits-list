import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsBannerComponent } from './fruits-banner.component';

describe('FruitsBannerComponent', () => {
  let component: FruitsBannerComponent;
  let fixture: ComponentFixture<FruitsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
