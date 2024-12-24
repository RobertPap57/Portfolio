import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorShadowComponent } from './cursor-shadow.component';

describe('CursorShadowComponent', () => {
  let component: CursorShadowComponent;
  let fixture: ComponentFixture<CursorShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorShadowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursorShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
