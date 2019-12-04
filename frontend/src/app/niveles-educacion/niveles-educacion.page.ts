import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';

@Component({
  selector: 'app-niveles-educacion',
  templateUrl: './niveles-educacion.page.html',
  styleUrls: ['./niveles-educacion.page.scss'],
})
export class NivelesEducacionPage implements OnInit {
  buttonNiveles: any = [
    { id_niveledu: 1, descripcion: 'Primaria' },
    { id_niveledu: 2, descripcion: 'Secundaria' },
    { id_niveledu: 3, descripcion: 'Técnico' },
    { id_niveledu: 4, descripcion: 'Tecnólogo' },
    { id_niveledu: 5, descripcion: 'Profesional' },
    { id_niveledu: 6, descripcion: 'Ninguno' }
  ];
  // tslint:disable-next-line: variable-name
  id_niveledu: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';
public descripcion: string;
public id: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private ruviService: RuviService
  ) { }

  ngOnInit() {
    this.getConsulta();
  }

  Aceptar() {
    this.ruvi.niveles_educacion = this.id_niveledu;
    this.ruviService.SaveLocalStorageItem(
      'ruvi',
      JSON.stringify(this.ruvi)
    );


    this.router.navigateByUrl('/ruvi/niveles-educacion');
  }

  testRadio() {
    console.log(this.id_niveledu);
  }

  getConsulta() {
    this.ruviService.getEducacion().subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  getConsultaId(id: string) {
    id = this.id;
    this.ruviService.getRuviEducacion(id).subscribe(
      estadoActual => {
        console.log(estadoActual);
        this.consulta = estadoActual;
      }, error => this.errorMessage = error);
  }

  saveForm() {
    const data = {
      descripcion: this.descripcion
    };
    this.ruviService.setEducacion(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }

  deleteForm(id: string) {
    this.id = id;
    this.ruviService.putEducacion(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }

  actualizarForm() {
    const data = {
      id_niveledu: this.id,
      descripcion: this.descripcion
    };
    this.ruviService.putEducacion(data).subscribe(response => {
      this.getConsulta();
      console.log(response);
    });
  }
}
