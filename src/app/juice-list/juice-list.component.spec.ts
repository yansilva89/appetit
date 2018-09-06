import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceListComponent } from './juice-list.component';

describe('JuiceListComponent', () => {
  let component: JuiceListComponent;
  let fixture: ComponentFixture<JuiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
