import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';

@Component({
  selector: 'app-sitio-labor',
  templateUrl: './sitio-labor.page.html',
  styleUrls: ['./sitio-labor.page.scss'],
})
export class SitioLaborPage implements OnInit {

  model: any = {};
  // tslint:disable-next-line: variable-name
  id_sitioinf: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  public direccion: string;
  public foto: string;
  public producto: string;
 

 constructor(
   //private camera: Camera
   private router: Router,
   private loadingController: LoadingController,
   private ruviService: RuviService
  ) {}

  ngOnInit() {
    this.getConsulta();
    this.model = {
      direccion: null,
      foto : null,
//      foto : assets/icon/images.jpg,
      producto: null
    };
  }
  Aceptar() {
    this.ruvi.sitio_labor = this.id_sitioinf;
    this.ruviService.SaveLocalStorageItem(
      'ruvi',
      JSON.stringify(this.ruvi)
    );

    this.router.navigateByUrl('/ruvi/sitio-labor');
  }

  testRadio() {
    console.log(this.id_sitioinf);
  }

  getConsulta() {
    this.ruviService.getSitioLabor().subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.ruviService.getRuviSitioLabor(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      direccion: this.direccion,
      foto: this.foto,
      producto: this.producto
    };
    this.ruviService.setSitioLabor(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
  deleteForm(id: string) {
    this.id = id;
    this.ruviService.deleteSitioLabor(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }
  actualizarForm() {
    const data = {
      direccion: this.direccion,
      foto: this.foto,
      producto: this.producto
    };
    this.ruviService.putSitioLabor(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
}

  public enviarData( formulario: NgForm) {
    if (formulario.valid ) {
      console.log(formulario);
    }
  }

  public evento(evento:Event){
console.log(evento);
  }


async loadCamera(){
//   const options = {
//     quality: 25,
//     destinationType: this.loadCamera.DestinationType.DATA_URL,
//     encodingType: this.loadCamera.EncodingType.JPEG,
//     medialType: this.loadCamera.MedialType.PICTURE,
//     correctOrientation: true,
//     cameraDirection: this.loadCamera.Direction.BACK,
//   };
// this.load.image = 'data:image/jpeg;base64,' + await this.loadCamera.getPicture(options);
}
}

