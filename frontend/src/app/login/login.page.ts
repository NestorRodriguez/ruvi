import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registros: any[] = [];
  errorMessage = '';

  constructor(private router: Router, 
              public alertController: AlertController, 
              private sendData: RuviService,
              private loadingCtrl : LoadingController,
              ) { }
  model: any = {};
  
  ngOnInit() {
    this.model = {
      email : null,
      clave : null
    };
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Por favor diligencie todos los campos para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  public async login( forma: NgForm ) {
    if (forma.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles'
      });
      loading.present();
      console.log(this.model.Usuario);
      console.log(this.model.Contrasena);
      loading.dismiss();
      //this.sendData.obtenerData(this.model);
      //this.router.navigateByUrl('registro-documento');
      this.sendData.getUsers(this.model).subscribe(data => {
        console.log(data);
      });
    }
    else {
      this.presentAlert();

    }
  }
}
