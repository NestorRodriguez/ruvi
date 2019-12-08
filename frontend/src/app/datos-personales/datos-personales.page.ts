import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_datos: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

public id: string;
public nombres: string;
public apellidos: string;
public edad: string;
public sexo: string;
public direccion: string;
public telefono: string;
public correo: string;
public discapacidad: string;
public desplazado: string;

constructor(
  private router: Router,
  private loadingController: LoadingController,
  private ruviService: RuviService) { }

 ngOnInit() {
  this.model = {
    nombre: null,
    apellido: null,
    edad: null,
    sexo: null,
    direccion: null,
    numero: null,
    correo: null,
    disc: null,
    desp: null
  };

}
datosPer(form: NgForm) {
console.log(this.model);
 }
 Aceptar() {
  this.ruvi.usuario = this.id_datos;
  this.ruviService.SaveLocalStorageItem(
    'ruvi',
    JSON.stringify(this.ruvi)
  );
  this.router.navigateByUrl('/ruvi/usuario');
}
testRadio() {
  console.log(this.id_datos);
}

getConsulta() {
  this.ruviService.getUsuario().subscribe(response => {
    this.getConsulta();
    console.log(response);
  });
}

getConsultaId(id: string) {
  id = this.id;
  this.ruviService.getRuviUsuario(id).subscribe(
    estadoActual => {
      console.log(estadoActual);
      this.consulta = estadoActual;
    }, error => this.errorMessage = error);
}
  saveForm() {
  const data = {
    nombres: this.nombres,
    apellidos: this.apellidos,
    edad: this.edad,
    sexo: this.sexo,
    direccion: this.direccion,
    telefono: this.telefono,
    correo: this.correo,
    discapacidad: this.discapacidad,
    desplazado: this.desplazado

  };
  this.ruviService.setUsuario(data).subscribe(response => {
    this.getConsulta();
    console.log(response);
  });
}

deleteForm(id: string) {
  this.id = id;
  this.ruviService.deleteUsuario(id).subscribe(response => {
    this.ngOnInit();
    console.log(response);
  });
}

actualizarForm() {
  const data = {
    nombres: this.nombres,
    apellidos: this.apellidos,
    edad: this.edad,
    sexo: this.sexo,
    direccion: this.direccion,
    telefono: this.telefono,
    correo: this.correo,
    discapacidad: this.discapacidad,
    desplazado: this.desplazado
  };
  this.ruviService.putUsuario(data).subscribe(response => {
    this.getConsulta();
    console.log(response);
  });
}
}
