import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  model: any;
  constructor() { }

  ngOnInit() {
    this.model = {
      nombres: null,
      apellidos: null,
      edad: null,
      sexo: null,
      numero: null,
      email: null,
      usu: null,
      password: null
    };
  }
    registroUsu(form: NgForm) {
    console.log(this.model);
     }

}
