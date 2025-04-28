import { TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsersComponent, HttpClientTestingModule], // Импортируем standalone компонент
    }).compileComponents();

    component = TestBed.createComponent(UsersComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
