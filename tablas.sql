create database ruvi;
use ruvi;


create table roles( 
id_rol int not null primary key auto_increment,
descripcion varchar(20) not null
);

insert into roles (descripcion)
values('IPES'),('alcaldias locales'),('usuario');

select * from roles;

create table registro_documento(
id_registrodoc int not null primary key auto_increment,
tipo_documento varchar (30) not null,
numero_documento int not null,
registro_rivi varchar(20)
);

insert into registro_documento (tipo_documento, numero_documento, registro_rivi)
values('cedula de ciudadania','436272844','si'),
      ('cedula de extranjeria','988494','no'),
      ('cedula de ciudadania','80876543','si'),
      ('cedula de ciudadania','41657874','no'),
      ('cedula de ciudadania','10234567','si'),
      ('cedula de extranjeria','23456764','no'),
      ('cedula de extranjeria','36272844','no');
 
select * from datos_personales;

create table datos_personales(
id_datos int not null primary key auto_increment,
nombres varchar(50) not null,
apellidos varchar (50) not null,
edad varchar(20) not null,
sexo varchar(20) not null,
direccion varchar(100) not null,
telefono float not null,
correo varchar(50),
discapacidad varchar(20),
desplazado varchar(20),
id_rol int not null,
foreign key (id_rol) references roles(id_rol)
);

select * from datos_personales;

insert into datos_personales(nombres, apellidos, edad, sexo, direccion, telefono, correo, discapacidad, desplazado, id_rol)
values('Carlos Antonio', 'Perez Ortiz','45 años','Masculino', 'calle 34 sur # 14-30', 3127645589, '', 'No', 'No', '3' ),
	  ('Aldemar', 'Gutierez Ortiz','38 años','Masculino', 'carrera 134 b # 8-78', '3004352627', 'aldemarg@gmail.com', 'No', 'No', '3' ),
      ('Miriam Camila', 'Lopez Ariel','58 años','Femenino', 'transversal 13 c # 88-78', '3157644689', '', 'No', 'Si', '3' ),
      ('Luis Alberto', 'Collazos Rico','60 años','Masculino', 'diagonal 15 # 30-56 sur', '3054637234', '', 'No', 'No', '3' ),
      ('Angi Maria', 'Solorsano Mendieta ','25 años','Femenino', 'calle 68 sur # 10-15', '3224536470', '', 'No', 'No', '2' ),
      ('Santiago Jose', 'Triana Uribe','45 años','Masculino', 'calle 34 sur # 14-30', '3176454589', '', 'No', 'No', '1' ),
      ('Wilber Stew', 'Torres Prieto','37 años','Masculino', 'diagonal 34 b # 76-89', '3127645589', '', 'No', 'No', '3' ),
      ('Jasinto Jose', 'Pulido Urrego','62 años','Masculino', 'calle 31 h # 51-87', '3216445759', '', 'Si', 'Si', '3' );

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
descripcion varchar(50)
);

insert into salud(descripcion)
values ('EPS'),('Contributiva'),('Subsidiada'),('Ninguna');

select * from salud;

create table vivienda(
id_viviendaper int not null primary key auto_increment,
descripcion varchar (50) not null
);

insert into vivienda(descripcion)
values('Propia'),('Arriendo'),('Otro');

select * from vivienda;

create table tiempo_labor_informal(
id_tiempoinf int not null primary key auto_increment,
descripcion varchar(50)

);

insert into tiempo_labor_informal(descripcion)
values ('Menos de 1 año'),('1 a 2 años'),('3 a 5 años'),('5 a 10 años'),('Más de 10 años'),('Otro');

select * from tiempo_labor_informal; 
 

 
create table sitio_labor_informal(
id_sitioinf int not null primary key auto_increment,
direccion varchar(100) not null,
foto varchar(100) not null,
producto varchar(50) not null
);

insert into sitio_labor_informal(direccion, foto, producto)
values ('calle 16 # 6-66', '', 'Frutas'), 
       ('calle 22 # 7-15', '', 'Confiteria'),
       ('calle 13 # 8-10', '', 'Libros'),
       ('carrera 7 # 10-40', '', 'Accesorios Telefonicos'),
       ('calle 45 # 7-34 ', '', 'Ropa'),
       ('calle 32 # 11-68', '', 'Bebidas Calientes'),
       ('carrera 5 # 40-20 sur', '', 'Obleas');

select * from sitio_labor_informal;

create table guardar_registro (
 id_guardar_registro int not null primary key auto_increment,
 id_registrodoc int not null,
 id_datos int not null, 
 id_niveledu int not null,
 id_nucleofam int not null,
 id_saludper int not null,
 id_viviendaper int not null,
 id_tiempoinf int not null,
 id_sitioinf int not null,
 foreign key (id_registrodoc) references registro_documento (id_registrodoc),
 foreign key (id_datos) references datos_personales (id_datos),
 foreign key (id_niveledu) references niveles_educacion (id_niveledu),
 foreign key (id_nucleofam) references nucleo_familiar (id_nucleofam),
 foreign key (id_saludper) references salud (id_saludper),
 foreign key (id_viviendaper) references vivienda (id_viviendaper),
 foreign key (id_tiempoinf) references tiempo_labor_informal (id_tiempoinf),
 foreign key (id_sitioinf) references sitio_labor_informal (id_sitioinf)
 );
 
insert into guardar_registro(id_datos, id_niveledu, id_nucleofam, id_registrodoc, id_saludper, id_sitioinf, id_tiempoinf, id_viviendaper)
values (''),(''),(''),(''),(''),(''),(''),('');

select * from guardar_registro;
