import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-documento',
  templateUrl: './registro-documento.page.html',
  styleUrls: ['./registro-documento.page.scss'],
})
export class RegistroDocumentoPage implements OnInit {
  model: any;
  constructor() { }

  ngOnInit() {
    this.model = {
      tipoDoc: null,
      numerodoc: null,
      rivi: null
    };

  }
// llamo el registro del Form del html (ngSubmit)
  registroDocu(form: NgForm) {
   console.log(this.model);
  }

}
