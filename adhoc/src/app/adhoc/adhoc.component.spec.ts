import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocComponent } from './adhoc.component';

describe('AdhocComponent', () => {
  let component: AdhocComponent;
  let fixture: ComponentFixture<AdhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
