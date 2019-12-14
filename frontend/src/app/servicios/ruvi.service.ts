import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ThrowStmt } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class RuviService {
  SaveLocalStorageItem(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
// tslint:disable-next-line: member-ordering
  data: any;
  // tslint:disable-next-line: member-ordering
  environment = { url : 'http://localhost:3000/ruvi'};
  // tslint:disable-next-line: member-ordering
  urlUsuario = `${environment.url}/usuario`;
// tslint:disable-next-line: member-ordering
  urlGuardarRegistro = `${environment.url}/guardar-registro`;
  // tslint:disable-next-line: member-ordering
  urlRoles = `${environment.url}/roles`;
// tslint:disable-next-line: member-ordering
  urlRegistroDocumento = `${environment.url}/registro-documento`;
  // tslint:disable-next-line: member-ordering
  urlSalud = `${environment.url}/salud`;
  // tslint:disable-next-line: member-ordering
  urlRegistroUsuarios = `${environment.url}/registro-usuarios`;
  // tslint:disable-next-line: member-ordering
  urlSitio = `${environment.url}/sitio-labor`;
  // tslint:disable-next-line: member-ordering
  urllogin =  `${environment.url}/login`;



  constructor(public http: HttpClient) { }

  public obtenerData(formulario: any) {
    this.data = formulario;
    console.log(this.data);
  }

  public enviarData() {
    return this.data;
  }

 

  getLogin(usuario, contrasena): Observable<any[]> {
    return this.http.get<any[]>(this.urllogin + '/' + usuario + '/' + contrasena).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.urlUsuario).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
   // usuario

   getUsuario(): Observable<any[]> {
      return this.http.get<any[]>(this.urlUsuario).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  setUsuario(data: any) {
    return this.http.post(this.urlUsuario, data);
  }

  getRuviUsuario(id: string) {
     return this.http.get(`${this.urlUsuario}/${id}`);
   }

  putUsuario(data: any) {
    console.log(data);
    return this.http.put(this.urlUsuario, data);
  }

  deleteUsuario(id: string) {
    console.log(`${this.urlUsuario}/${id}`);
    return this.http.delete(`${this.urlUsuario}/${id}`);
  }



  // Guardar Registro
  getGuardarRegistro(): Observable<any[]> {

    return this.http.get<any[]>(this.urlGuardarRegistro).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  setGuardarRegistro(data: any) {
    return this.http.post(this.urlGuardarRegistro, data);
  }

  getRuviGuardarRegistro(id: string) {
    return this.http.get(`${this.urlGuardarRegistro}/${id}`);
  }

  putGuardarRegistro(data: any) {
    console.log(data);
    return this.http.put(this.urlGuardarRegistro, data);
  }

  deleteGuardarRegistro(id: string) {
    console.log(`${this.urlGuardarRegistro}/${id}`);
    return this.http.delete(`${this.urlGuardarRegistro}/${id}`);
  }
// Roles
getRoles(): Observable<any[]> {

  return this.http.get<any[]>(this.urlRoles).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setRoles(data: any) {
  return this.http.post(this.urlRoles, data);
}

getRuviRoles(id: string) {
   return this.http.get(`${this.urlRoles}/${id}`);
}

putRoles(data: any) {
  console.log(data);
  return this.http.put(this.urlRoles, data);
}

deleteRoles(id: string) {
  console.log(`${this.urlRoles}/${id}`);
  return this.http.delete(`${this.urlRoles}/${id}`);
}



// Registro Documento
getRegistroDocumento(): Observable<any[]> {

  return this.http.get<any[]>(this.urlRegistroDocumento).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setRegistroDocumento(data: any) {
  return this.http.post(this.urlRegistroDocumento, data);
}

getRuviRegistroDocumento(id: string) {
   return this.http.get(`${this.urlRegistroDocumento}/${id}`);
}

putRegistroDocumento(data: any) {
  console.log(data);
  return this.http.put(this.urlRegistroDocumento, data);
}

deleteRegistroDocumento(id: string) {
  console.log(`${this.urlRegistroDocumento}/${id}`);
  return this.http.delete(`${this.urlRegistroDocumento}/${id}`);
}

// Salud
getSalud(): Observable<any[]> {

  return this.http.get<any[]>(this.urlSalud).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setSalud(data: any) {
  return this.http.post(this.urlSalud, data);
}

getRuviSalud(id: string) {
  return this.http.get(`${this.urlSalud}/${id}`);
}

putSalud(data: any) {
  console.log(data);
  return this.http.put(this.urlSalud, data);
}

deleteSalud(id: string) {
  console.log(`${this.urlSalud}/${id}`);
  return this.http.delete(`${this.urlSalud}/${id}`);
}



//  Registro Usuario
getRegistroUsuarios(): Observable<any[]> {

  return this.http.get<any[]>(this.urlRegistroUsuarios).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setRegistroUsuarios(data: any) {
  return this.http.post(this.urlRegistroUsuarios, data);
}

getRuviRegistroUsuarios(id: string) {
  return this.http.get(`${this.urlRegistroUsuarios}/${id}`);
}

putRegistroUsuarios(data: any) {
  console.log(data);
  return this.http.put(this.urlRegistroUsuarios, data);
}

deleteRegistroUsuarios(id: string) {
  console.log(`${this.urlRegistroUsuarios}/${id}`);
  return this.http.delete(`${this.urlRegistroUsuarios}/${id}`);
}

//  Sitio de Labor
getSitioLabor(): Observable<any[]> {

  return this.http.get<any[]>(this.urlSitio).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setSitioLabor(data: any) {
  return this.http.post(this.urlSitio, data);
}

getRuviSitioLabor(id: string) {
  return this.http.get(`${this.urlSitio}/${id}`);
}

putSitioLabor(data: any) {
  console.log(data);
  return this.http.put(this.urlSitio, data);
}

deleteSitioLabor(id: string) {
  console.log(`${this.urlSitio}/${id}`);
  return this.http.delete(`${this.urlSitio}/${id}`);
}



private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    errorMessage = `An error ocurred ${err.error.message}`;
  } else {
    errorMessage = `Server returned code: ${err.status}, error message is:   ${err.message}`;
    // tslint:disable-next-line:align
  } console.log(errorMessage);
  return throwError(errorMessage);
}

}

