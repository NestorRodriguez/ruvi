create database ruvi;
use ruvi;
/*drop database ruvi;*/

/*Código que deben correr en workbeanch 8*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';

create table roles( 
id_rol int not null primary key auto_increment,
descripcion varchar(20) not null
);


insert into roles (descripcion)
values('Administrador'),('Usuario');

/*select * from roles;*/

create table registro_usuarios(
id_registrousu int not null primary key auto_increment,
nombre varchar (30) not null,
apellido varchar (30) not null,
edad varchar(20) not null,
sexo varchar(20) not null,
telefono double not null,
correo varchar(50) not null,
usuario varchar(100) not null,
contrasena varchar(100) not null,
id_rol int not null,
foreign key (id_rol) references roles(id_rol)
);
	
insert into registro_usuarios(nombre,apellido,edad,sexo,telefono,correo,usuario,contrasena,id_rol)
values("Luis","Forero Torres","35","Masculino","3187809716","laforero1@misena.edu.co","laft","12345","1");

/*select * from registro_usuarios;*/

create table registro_documento(
id_registrodoc int not null primary key auto_increment,
tipo_documento varchar (30) not null,
numero_documento int not null,
registro_rivi varchar(20)
);

insert into registro_documento (tipo_documento, numero_documento, registro_rivi)
values('Cedula de Ciudadania','436272844','Si'),
      ('Cedula de Extranjeria','988494','No'),
      ('Cedula de Ciudadania','80876543','Si'),
      ('Cedula de Ciudadania','41657874','No'),
      ('Cedula de Ciudadania','10234567','Si'),
      ('Cedula de Extranjeria','23456764','No'),
      ('Cedula de Extranjeria','36272844','No');
 
/*select * from registro_documento;*/
create table usuario(
id_datos int not null primary key auto_increment,
nombres varchar(50) not null,
apellidos varchar (50) not null,
edad varchar(20) not null,
sexo varchar(20) not null,
direccion varchar(100) not null,
telefono double not null,
correo varchar(50),
discapacidad varchar(20),
desplazado varchar(20)
);
use ruvi;
insert into usuario(nombres, apellidos, edad, sexo, direccion, telefono, correo, discapacidad, desplazado)
values('Juan Camilo','Perez Ortiz','45','Masculino', 'calle 34 sur # 14-30','3127645589','poi','No','No'),
	  ('Aldemar', 'Gutierez Ortiz','38 años','Masculino', 'carrera 134 b # 8-78', '3004352627', 'aldemarg@gmail.com', 'No', 'No'),
      ('Miriam Camila', 'Lopez Ariel','58 años','Femenino', 'transversal 13 c # 88-78', '3157644689', '', 'No', 'Si'),
      ('Luis Alberto', 'Collazos Rico','60 años','Masculino', 'diagonal 15 # 30-56 sur', '3054637234', '', 'No', 'No'),
      ('Angi Maria', 'Solorsano Mendieta ','25 años','Femenino', 'calle 68 sur # 10-15', '3224536470', '', 'No', 'No'),
      ('Santiago Jose', 'Triana Uribe','45 años','Masculino', 'calle 34 sur # 14-30', '3176454589', '', 'No', 'No'),
      ('Wilber Stew', 'Torres Prieto','37 años','Masculino', 'diagonal 34 b # 76-89', '3127645589', '', 'No', 'No'),
      ('Jasinto Jose', 'Pulido Urrego','62 años','Masculino', 'calle 31 h # 51-87', '3216445759', '', 'Si', 'Si');
/*use ruvi;*/
/*select * from registro_usuarios;*/
/*select * from usuario;*/
/*select * from usuario where telefono = 3127645589;*/
/*SP para guardar datos*/
/*DROP PROCEDURE `guardar datos`;*/

DELIMITER $$
CREATE PROCEDURE `guardar datos` (IN nombre varchar(50), IN apellido varchar(50), IN edad varchar(20), IN sexo varchar(20), IN direccion varchar(100), IN telefono double)
BEGIN
	insert into ruvi.usuario (nombres, apellidos, edad, sexo, direccion, telefono) 
    values (nombre, apellido, edad, sexo, direccion, telefono);
	SELECT * FROM usuario where nombres = nombre;
END $$

CALL `guardar datos`("Nestor Andres", "Rodriguez", "50", "No sabe", "Calle falsa # 123", 3123215578);

/*FIN SP*/
/*SELECT * FROM usuario;*/

create table salud(
id_saludper int not null primary key auto_increment,
nombre_eps varchar (50),
regimen_afiliacion varchar(100)

);

insert into salud(nombre_eps,regimen_afiliacion)
values ('Capital Salud','Contributiva'),
	   ('Capital Salud','Subsidiada');

/*select * from salud;*/



/*drop table  sitio_labor;*/
 
create table sitio_labor(
id_sitioinf int not null primary key auto_increment,
direccion varchar(100) not null,
producto varchar(50) not null, 
tiempoInformal varchar(50),
sitio_laboreducacion varchar(100),
familia varchar(100),
vivienda varchar(100)
);

insert into sitio_labor(direccion, producto, tiempoInformal )
values ('calle 16 # 6-66', 'Frutas','2 años'), 
       ('calle 22 # 7-15',  'Confiteria','5 años'),
       ('calle 13 # 8-10',  'Libros','10 años'),
       ('carrera 7 # 10-40',  'Accesorios Telefonicos','10 años'),
       ('calle 45 # 7-34 ',  'Ropa', '2 años'),
       ('calle 32 # 11-68',  'Bebidas Calientes','3 años'),
       ('carrera 5 # 40-20 sur','Obleas','Más');

/*select * from sitio_labor;*/

create table guardar_registro (
 id_guardar_registro int not null primary key auto_increment,
 id_registrodoc int not null,
 id_datos int not null unique, 
 id_saludper int not null,
 id_sitioinf int not null,
 foreign key (id_registrodoc) references registro_documento (id_registrodoc),
 foreign key (id_datos) references usuario (id_datos),
 foreign key (id_saludper) references salud (id_saludper),
 foreign key (id_sitioinf) references sitio_labor (id_sitioinf)
 );
 
insert into guardar_registro(id_datos, id_registrodoc, id_saludper, id_sitioinf)
values ('2','1','1','1');
/*select * from guardar_registro;*/

/*select * from sitio_labor;
INSERT INTO sitio_labor SET direccion='${dato.direccion}', foto='${dato.foto}', producto='${dato.producto}', tiempoInformal='${dato.fdgdfgdfgdfInformal}'*/