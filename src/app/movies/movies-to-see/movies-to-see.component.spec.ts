import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesToSeeComponent } from './movies-to-see.component';

describe('MoviesToSeeComponent', () => {
  let component: MoviesToSeeComponent;
  let fixture: ComponentFixture<MoviesToSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesToSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesToSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
