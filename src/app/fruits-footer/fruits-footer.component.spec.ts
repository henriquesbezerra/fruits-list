import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsFooterComponent } from './fruits-footer.component';

describe('FruitsFooterComponent', () => {
  let component: FruitsFooterComponent;
  let fixture: ComponentFixture<FruitsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
