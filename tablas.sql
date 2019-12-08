create database ruvi;
use ruvi;
drop database ruvi;

/*Código que deben correr en workbeanch 8*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';

create table roles( 
id_rol int not null primary key auto_increment,
descripcion varchar(20) not null
);


insert into roles (descripcion)
values('Administrador'),('Usuario');

select * from roles;

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

select * from registro_usuarios;

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
 
select * from registro_documento;

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
select * from registro_usuarios;





insert into usuario(nombres, apellidos, edad, sexo, direccion, telefono, correo, discapacidad, desplazado )
values('Carlos Antonio','Perez Ortiz','45','Masculino', 'calle 34 sur # 14-30','3127645589','poi','No','No'),
	  ('Aldemar', 'Gutierez Ortiz','38 años','Masculino', 'carrera 134 b # 8-78', '3004352627', 'aldemarg@gmail.com', 'No', 'No' ),
      ('Miriam Camila', 'Lopez Ariel','58 años','Femenino', 'transversal 13 c # 88-78', '3157644689', '', 'No', 'Si' ),
      ('Luis Alberto', 'Collazos Rico','60 años','Masculino', 'diagonal 15 # 30-56 sur', '3054637234', '', 'No', 'No' ),
      ('Angi Maria', 'Solorsano Mendieta ','25 años','Femenino', 'calle 68 sur # 10-15', '3224536470', '', 'No', 'No' ),
      ('Santiago Jose', 'Triana Uribe','45 años','Masculino', 'calle 34 sur # 14-30', '3176454589', '', 'No', 'No' ),
      ('Wilber Stew', 'Torres Prieto','37 años','Masculino', 'diagonal 34 b # 76-89', '3127645589', '', 'No', 'No' ),
      ('Jasinto Jose', 'Pulido Urrego','62 años','Masculino', 'calle 31 h # 51-87', '3216445759', '', 'Si', 'Si');
select * from usuario where telefono = 3127645589;
/*SP para guardar datos*/
DROP PROCEDURE `guardar datos`;

DELIMITER $$
CREATE PROCEDURE `guardar datos` (IN nombre varchar(50), IN apellido varchar(50), IN edad varchar(20), IN sexo varchar(20), IN direccion varchar(100), IN telefono double)
BEGIN
	insert into ruvi.usuario (nombres, apellidos, edad, sexo, direccion, telefono) 
    values (nombre, apellido, edad, sexo, direccion, telefono);
	SELECT * FROM usuario where nombres = nombre;
END $$

CALL `guardar datos`("Nestor Andres", "Rodriguez", "50", "No sabe", "Calle falsa # 123", 3123215578);

/*FIN SP*/
create table niveles_educacion(
id_niveledu int not null primary key auto_increment,
descripcion varchar (50) not null
);



insert into niveles_educacion(descripcion)
values('Primaria'), ('Secundaria'), ('Técnico'), ('Tecnólogo'), ('Profesional'), ('Ninguno'), ('Otro');

select * from niveles_educacion;

create table nucleo_familiar(
id_nucleofam int not null primary key auto_increment,
descripcion varchar (50) not null
);

insert into nucleo_familiar (descripcion)
values('Padre'),('Madre'),('Hermanos'),('Conyuge'),('Hijos'),('Otros');

select * from nucleo_familiar;

create table salud(
id_saludper int not null primary key auto_increment,
nombre_eps varchar (50),
descripcion varchar(50)
);

insert into salud(nombre_eps,descripcion)
values ('Capital Salud','Contributiva'),
       ('Capital Salud','Subsidiada'),
       ('','NInguno');

select * from salud;

create table vivienda(
id_viviendaper int not null primary key auto_increment,
descripcion varchar (50) not null
);

insert into vivienda(descripcion)
values('Propia'),('Arriendo'),('Otro');

select * from vivienda;

create table tiempo_labor(
id_tiempoinf int not null primary key auto_increment,
descripcion varchar(50)

);

insert into tiempo_labor(descripcion)
values ('Menos de 1 año'),('2 años'),('3 años'),('5 años'),('10 años'),('Otro');

select * from tiempo_labor_informal; 
 

 
create table sitio_labor(
id_sitioinf int not null primary key auto_increment,
direccion varchar(100) not null,
foto varchar(100) not null,
producto varchar(50) not null
);

insert into sitio_labor(direccion, foto, producto)
values ('calle 16 # 6-66', '', 'Frutas'), 
       ('calle 22 # 7-15', '', 'Confiteria'),
       ('calle 13 # 8-10', '', 'Libros'),
       ('carrera 7 # 10-40', '', 'Accesorios Telefonicos'),
       ('calle 45 # 7-34 ', '', 'Ropa'),
       ('calle 32 # 11-68', '', 'Bebidas Calientes'),
       ('carrera 5 # 40-20 sur', '', 'Obleas');

select * from sitio_labor;

create table guardar_registro (
 id_guardar_registro int not null primary key auto_increment,
 id_registrodoc int not null,
 id_datos int not null unique, 
 id_niveledu int not null,
 id_nucleofam int not null,
 id_saludper int not null,
 id_viviendaper int not null,
 id_tiempoinf int not null,
 id_sitioinf int not null,
 foreign key (id_registrodoc) references registro_documento (id_registrodoc),
 foreign key (id_datos) references usuario (id_datos),
 foreign key (id_niveledu) references niveles_educacion (id_niveledu),
 foreign key (id_nucleofam) references nucleo_familiar (id_nucleofam),
 foreign key (id_saludper) references salud (id_saludper),
 foreign key (id_viviendaper) references vivienda (id_viviendaper),
 foreign key (id_tiempoinf) references tiempo_labor (id_tiempoinf),
 foreign key (id_sitioinf) references sitio_labor (id_sitioinf)
 );
 
insert into guardar_registro(id_datos, id_niveledu, id_nucleofam, id_registrodoc, id_saludper, id_sitioinf, id_tiempoinf, id_viviendaper)
values ('1','4','1','1','1','1','4','2');

select * from guardar_registro;
