import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterComponent, HttpClientTestingModule], // Импортируем standalone компонент
    }).compileComponents();

    component = TestBed.createComponent(RegisterComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
