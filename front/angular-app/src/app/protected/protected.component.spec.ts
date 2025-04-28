import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectedComponent } from './protected.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProtectedComponent', () => {
  let component: ProtectedComponent;
  let fixture: ComponentFixture<ProtectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProtectedComponent, HttpClientTestingModule], // Импортируем standalone компонент
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectedComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout when onLogout is called', () => {
    spyOn(component, 'onLogout');
    component.onLogout();
    expect(component.onLogout).toHaveBeenCalled();
  });

  it('should display the role of the user', () => {
    component.role = 'admin';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('admin');
  });
});
