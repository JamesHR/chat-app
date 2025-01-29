import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoriesPage } from './stories.page';

describe('StoriesPage', () => {
  let component: StoriesPage;
  let fixture: ComponentFixture<StoriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
