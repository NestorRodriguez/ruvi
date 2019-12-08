import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';


@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_saludper: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

  public id: string;
  // tslint:disable-next-line: variable-name
  public nombre_eps: string;
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
    this.ruvi.salud = this.id_saludper;
    this.ruviService.SaveLocalStorageItem(
      'ruvi',
      JSON.stringify(this.ruvi)
    );

    this.router.navigateByUrl('/ruvi/salud');
  }

  testRadio() {
    console.log(this.id_saludper);
  }

  getConsulta() {
    this.ruviService.getSalud().subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.ruviService.getRuviSalud(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      nombre_eps: this.nombre_eps,
      descripcion: this.descripcion
    };
    this.ruviService.setSalud(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
  deleteForm(id: string) {
    this.id = id;
    this.ruviService.deleteSalud(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }
  actualizarForm() {
    const data = {
      id_saludper: this.id,
      descripcion: this.descripcion,
      nombre_eps: this.nombre_eps
    };
    this.ruviService.putSalud(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
}

