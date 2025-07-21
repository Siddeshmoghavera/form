import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formup } from './formup';

describe('Formup', () => {
  let component: Formup;
  let fixture: ComponentFixture<Formup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
