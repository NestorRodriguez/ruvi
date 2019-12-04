import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-sitio-labor',
  templateUrl: './sitio-labor.page.html',
  styleUrls: ['./sitio-labor.page.scss'],
})
export class SitioLaborPage implements OnInit {

  model: any = {};

//  constructor() { }
 constructor(//private camera: Camera
  ) {}

  ngOnInit() {
    this.model ={
      direccion: null,
      foto : null,
//      foto : assets/icon/images.jpg,
      producto: null
    }
  }

  public enviarData( formulario : NgForm) {
    if (formulario.valid ){
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

