import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionPage } from './inicio-sesion.page';
import { FormsModule } from '@angular/forms';

describe('InicioSesionPage', () => {
  let component: InicioSesionPage;
  let fixture: ComponentFixture<InicioSesionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioSesionPage],
      imports: [FormsModule], // Asegúrate de agregar FormsModule aquí
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería devolver true si el email contiene el @gmail.com', () => {
    const resultado = component.isGmailEmail('email')
    expect(resultado).toBeFalse();
  });

});
