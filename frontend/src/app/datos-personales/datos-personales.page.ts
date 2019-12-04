import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {
  model: any;
 constructor() { }

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
}
