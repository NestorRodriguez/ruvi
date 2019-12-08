import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController , NavController} from '@ionic/angular';
import { RuviService } from '../servicios/ruvi.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  model: any;
  // tslint:disable-next-line: variable-name
  id_registrousu: number;
  ruvi: any;
  state: any;
  consulta: any = [];
  errorMessage = '';

public id: string;
public nombre: string;
public apellido: string;
public edad: string;
public sexo: string;
public telefono: string;
public correo: string;
public usuario: string;
public contrasena: string;
// tslint:disable-next-line: variable-name
public id_rol: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private ruviService: RuviService, private navcontrol: NavController) { }

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
     Aceptar() {
      this.ruvi.registro_usuarios = this.id_registrousu;
      this.ruviService.SaveLocalStorageItem(
        'ruvi',
        JSON.stringify(this.ruvi)
      );
      this.router.navigateByUrl('/ruvi/registro-usuarios');
    }

    testRadio() {
      console.log(this.id_registrousu);
    }

    getConsulta() {
      this.ruviService.getRegistroUsuarios().subscribe(response => {
        this.getConsulta();
        console.log(response);
      });
    }

    getConsultaId(id: string) {
      id = this.id;
      this.ruviService.getRuviRegistroUsuarios(id).subscribe(
        estadoActual => {
          console.log(estadoActual);
          this.consulta = estadoActual;
        }, error => this.errorMessage = error);
    }

      saveForm() {
      const data = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        sexo: this.sexo,
        telefono: this.telefono,
        correo: this.correo,
        usuario: this.usuario,
        contrasena: this.contrasena,
        id_rol: this.id_rol
      };
      console.log(data);
      this.ruviService.setRegistroUsuarios(data).subscribe(response => {
          console.log(response);
          this.navcontrol.navigateRoot('menu');
        });
    }

    deleteForm(id: string) {
      this.id = id;
      this.ruviService.deleteRegistroUsuarios(id).subscribe(response => {
        this.ngOnInit();
        console.log(response);
      });
    }

    actualizarForm() {
      const data = {
        id_registrousu: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        sexo: this.sexo,
        telefono: this.telefono,
        correo: this.correo,
        usuario: this.usuario,
        contrasena: this.contrasena,
        id_rol: this.id_rol
      };
      this.ruviService.putRegistroDocumento(data).subscribe(response => {
          console.log(response);
      });
    }

  }
