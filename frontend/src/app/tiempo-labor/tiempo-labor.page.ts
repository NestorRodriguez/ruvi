import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';

@Component({
  selector: 'app-tiempo-labor',
  templateUrl: './tiempo-labor.page.html',
  styleUrls: ['./tiempo-labor.page.scss'],
})
export class TiempoLaborPage implements OnInit {

  model: any = {};
  // tslint:disable-next-line: variable-name
  id_tiempoinf: number;
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
    this.ruvi.tiempo_labor = this.id_tiempoinf;
    this.ruviService.SaveLocalStorageItem(
      'ruvi',
      JSON.stringify(this.ruvi)
    );

    this.router.navigateByUrl('/ruvi/tiempo-labor');
  }

  testRadio() {
    console.log(this.id_tiempoinf);
  }

  getConsulta() {
    this.ruviService.getTiempoLabor().subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.ruviService.getRuviTiempoLabor(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }
  saveForm() {
    const data = {
      direccion: this.descripcion
    };
    this.ruviService.setTiempoLabor(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
  deleteForm(id: string) {
    this.id = id;
    this.ruviService.deleteTiempoLabor(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }
  actualizarForm() {
    const data = {
      descripcion: this.descripcion
    };
    this.ruviService.putTiempoLabor(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
}
