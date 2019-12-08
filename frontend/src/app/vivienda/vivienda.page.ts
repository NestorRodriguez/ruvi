import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';


@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.scss'],
})
export class ViviendaPage implements OnInit {
  model: any = {};
// tslint:disable-next-line: variable-name
  id_viviendaper: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  public descripcion: string;

  constructor(
   private router: Router,
   private loadingController: LoadingController,
   private ruviService: RuviService
  ) { }
 
  ngOnInit() {
    this.getConsulta();
  }

  Aceptar() {
    this.ruvi.vivienda = this.id_viviendaper;
    this.ruviService.SaveLocalStorageItem(
      'ruvi',
      JSON.stringify(this.ruvi)
    );

    this.router.navigateByUrl('/ruvi/vivienda');
  }

  testRadio() {
    console.log(this.id_viviendaper);
  }

  getConsulta() {
    this.ruviService.getVivienda().subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.ruviService.getRuviVivienda(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      direccion: this.descripcion
    };
    this.ruviService.setVivienda(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
  deleteForm(id: string) {
    this.id = id;
    this.ruviService.deleteVivienda(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }
  actualizarForm() {
    const data = {
      descripcion: this.descripcion
    };
    this.ruviService.putVivienda(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
}

