import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitio-labor',
  templateUrl: './sitio-labor.page.html',
  styleUrls: ['./sitio-labor.page.scss'],
})
export class SitioLaborPage implements OnInit {

  prueba : any;

  constructor() { }

  ngOnInit() {
  }

  pruebaboton()
  {
    this.prueba="Hello"
    console.log("Ingrese a pruebaboton");
  }

}
