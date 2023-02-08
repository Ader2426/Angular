import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAppComponent } from './author-app.component';

describe('AuthorAppComponent', () => {
  let component: AuthorAppComponent;
  let fixture: ComponentFixture<AuthorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
