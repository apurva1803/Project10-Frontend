import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmarksheetComponent } from './getmarksheet.component';

describe('GetmarksheetComponent', () => {
  let component: GetmarksheetComponent;
  let fixture: ComponentFixture<GetmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
