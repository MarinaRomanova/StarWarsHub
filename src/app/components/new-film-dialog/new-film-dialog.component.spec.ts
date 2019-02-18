import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFilmDialogComponent } from './new-film-dialog.component';

describe('NewFilmDialogComponent', () => {
  let component: NewFilmDialogComponent;
  let fixture: ComponentFixture<NewFilmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFilmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFilmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
