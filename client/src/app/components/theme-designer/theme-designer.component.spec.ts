import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDesignerComponent } from './theme-designer.component';

describe('ThemeDesignerComponent', () => {
  let component: ThemeDesignerComponent;
  let fixture: ComponentFixture<ThemeDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
