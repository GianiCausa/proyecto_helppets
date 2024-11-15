import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly EMAIL_KEY = 'registroEmail';
  private readonly PASSWORD_KEY = 'registroPassword';
  private readonly ADMIN_EMAIL = 'administrador@gmail.com';
  private readonly ADMIN_ALERT_SHOWN_KEY = 'adminAlertShown';


  constructor() { }

  registerUser(email: string, password: string): void {
    localStorage.setItem(this.EMAIL_KEY, email);
    localStorage.setItem(this.PASSWORD_KEY, password);
  }

  getRegistroEmail(): string | null {
    return localStorage.getItem(this.EMAIL_KEY);
  }

  getRegistroPassword(): string | null {
    return localStorage.getItem(this.PASSWORD_KEY);
  }

  validateLogin(email: string, password: string): boolean {
    const registroEmail = this.getRegistroEmail();
    const registroPassword = this.getRegistroPassword();
    return email === registroEmail && password === registroPassword;
  }

  validPassword(password: string): boolean {
    const passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{3,}$/;
    return passwordRegEx.test(password);
  }

  isAdmin(email: string): boolean {
    return email === this.ADMIN_EMAIL;
  }

  isAdminAlertShown(): boolean {
    return localStorage.getItem(this.ADMIN_ALERT_SHOWN_KEY) === 'true';
  }

  // Marcar que la alerta fue mostrada
  setAdminAlertShown(): void {
    localStorage.setItem(this.ADMIN_ALERT_SHOWN_KEY, 'true');
  }
  
}

