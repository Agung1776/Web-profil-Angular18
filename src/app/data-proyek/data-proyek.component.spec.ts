import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProyekComponent } from './data-proyek.component';

describe('DataProyekComponent', () => {
  let component: DataProyekComponent;
  let fixture: ComponentFixture<DataProyekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProyekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
