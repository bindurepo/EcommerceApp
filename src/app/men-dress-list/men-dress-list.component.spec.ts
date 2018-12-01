import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenDressListComponent } from './men-dress-list.component';

describe('MenDressListComponent', () => {
  let component: MenDressListComponent;
  let fixture: ComponentFixture<MenDressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenDressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenDressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
