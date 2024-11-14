import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private navCtrl: NavController, private auten: AutenticacionService) { }

  validPassword(password: string): boolean {
    const passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{3,}$/;
    return passwordRegEx.test(password);
  }

  registro(): void {
    if (this.isGmailEmail(this.email) && this.password === this.confirmPassword) {
      if (this.validPassword(this.password)) {
        this.auten.registerUser(this.email, this.password);
        console.log("Registro exitoso.");
          this.navCtrl.navigateForward('/inicio-sesion');
      } else {
        console.log("La contraseña no cumple con los requisitos.");
      }
    } else {
      console.log("El correo debe terminar en @gmail.com y las contraseñas deben coincidir.");
    }
  }

  // Validador para asegurar que el email termine en "@gmail.com"
  isGmailEmail(email: string): boolean {
    return email.endsWith('@gmail.com');
  }

  ngOnInit() {
  }

}
