import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';

@Component({
  selector: 'app-nucleo-familiar',
  templateUrl: './nucleo-familiar.page.html',
  styleUrls: ['./nucleo-familiar.page.scss'],
})
export class NucleoFamiliarPage implements OnInit {

  // tslint:disable-next-line: variable-name
  id_nucleofam: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';
public descripcion: string;
public id: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private ruviService: RuviService) { }

    ngOnInit() {
      this.getConsulta();
    }
    Aceptar() {
      this.ruvi.nucleo_familiar = this.id_nucleofam;
      this.ruviService.SaveLocalStorageItem(
        'ruvi',
        JSON.stringify(this.ruvi)
      );

      this.router.navigateByUrl('/ruvi/nucleo_familiar');
    }

    testRadio() {
      console.log(this.id_nucleofam);
    }

    getConsulta() {
      this.ruviService.getFamilia().subscribe(response => {
        this.getConsulta();
        console.log(response);
      });
    }

    getConsultaId(id: string) {
      id = this.id;
      this.ruviService.getRuviFamilia(id).subscribe(
        estadoActual => {
          console.log(estadoActual);
          this.consulta = estadoActual;
        }, error => this.errorMessage = error);
    }
    saveForm() {
      const data = {
        descripcion: this.descripcion
      };
      this.ruviService.setFamilia(data).subscribe(response => {
        this.getConsulta();
        console.log(response);
      });
    }
    deleteForm(id: string) {
      this.id = id;
      this.ruviService.deleteFamilia(id).subscribe(response => {
        this.ngOnInit();
        console.log(response);
      });
    }
    actualizarForm() {
      const data = {
        id_nucleofam: this.id,
        descripcion: this.descripcion
      };
      this.ruviService.putFamilia(data).subscribe(response => {
        this.getConsulta();
        console.log(response);
      });
    }
  }
