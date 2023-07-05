import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IbibliotecaPage } from './ibiblioteca.page';

describe('IbibliotecaPage', () => {
  let component: IbibliotecaPage;
  let fixture: ComponentFixture<IbibliotecaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IbibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
