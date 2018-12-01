import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDressListComponent } from './women-dress-list.component';

describe('WomenDressListComponent', () => {
  let component: WomenDressListComponent;
  let fixture: ComponentFixture<WomenDressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
