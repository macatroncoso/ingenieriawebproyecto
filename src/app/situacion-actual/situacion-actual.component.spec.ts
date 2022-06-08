import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionActualComponent } from './situacion-actual.component';

describe('SituacionActualComponent', () => {
  let component: SituacionActualComponent;
  let fixture: ComponentFixture<SituacionActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacionActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacionActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
