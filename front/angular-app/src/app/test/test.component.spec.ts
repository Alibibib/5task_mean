import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  fit('Should display role', ()=>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelector('h1')?.textContent)
    expect(compiled.querySelector('h1')?.textContent).toContain('Твоя роль: admin');
  })
});
