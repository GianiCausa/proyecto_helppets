import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private navCtrl: NavController, private auten: AutenticacionService, private alertController: AlertController) { }

  validPassword(password: string): boolean {
    const passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{3,}$/;
    return passwordRegEx.test(password);
  }
  
  isGmailEmail(email: string): boolean {
    return email.endsWith('@gmail.com');
  }

  inicio(): void {
    if (this.isGmailEmail(this.email)) {
      if (this.auten.validateLogin(this.email, this.password)) {
        if (this.auten.isAdmin(this.email)) {
          console.log("Inicio de sesión como administrador.");
            this.navCtrl.navigateForward('/home');
        } else {
          console.log("Inicio de sesión como usuario normal.");
            this.navCtrl.navigateForward('/principal');
        }
      } else {
        console.log("Credenciales incorrectas.");
      }
    } else {
      console.log("El email debe terminar en @gmail.com");
    }
  }

  Irregistro(){
    this.navCtrl.navigateForward('/registro');
  }

  async showAdminAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Acceso de Administrador',
      message: 'Has ingresado como administrador.',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  
  ngOnInit() {
  }
  

}
