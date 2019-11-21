const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');

const cors = require('cors');

// Se agrega la librería para habilitar cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
//app.use(bodyParser.json({ extended: true, limit: '10mb' }));
app.use(bodyParser.json());
//Parámetros de la conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ruvi",
    port: 3300,
    multipleStatements: true
});


//Realizar la conexión a la base de datos
db.connect(function(error) {
    if (error)
        console.log(error);
    else
        console.log(`Base de datos conectada!`);
});

app.get('/', function(req, res) {
    console.log('Página de Inicio ');
    res.send("Bienvenidos al servidor <strong> ruvi </strong>");
});

/***************************************************
 * Comienzo de servicios    *
 **************************************************/


app.get('/', function(req, res) {
    console.log('Página de Inicio ');
    res.send("Bienvenidos al servidor <strong> ruvi </strong>");
});
/***************************
MP_niveles_educacion
Crear datos niveles de educación
***************************/


app.get('/ruvi/niveles_educacion', (req, res) => {
    console.log('Consultar datos de los niveles de educacion');
    var query = db.query('select * from niveles_educacion', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/niveles_educacion/:id_niveledu', (req, res) => {
    const id_niveledu = req.params.id_niveledu;
    const sql = `SELECT * FROM niveles_educacion WHERE id_niveledu='${id_niveledu}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                const [data] = result;
                res.json(data)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.post('/ruvi/niveles_educacion', (req, res) => {
    const dato = req.body

    const sql = `INSERT INTO niveles_educacion (descripcion)
  values ('${dato.descripcion}')`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.put('/ruvi/niveles_educacion', (req, res) => {

    const dato = req.body

    const sql = `UPDATE niveles_educacion SET id_niveledu = '${dato.descripcion}'
          WHERE id_niveledu = '${dato.descripcion}';`;

    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/niveles_educacion/:id_niveledu', (req, res) => {
    const id_niveledu = req.params.id_niveledu;
    const sql = `DELETE FROM niveles_educacion WHERE id_niveledu = '${id_niveledu}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/********************
 *  
 MP_guardar_registro
 * 
 ********************/

app.get('/ruvi/guardar_registro', (req, res) => {
    console.log('Consultar datos guardar los registros');
    var query = db.query('select * from guardar_registro', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/guardar_registro/:id_guardar_registro', (req, res) => {
        const id_guardar_registro = req.params.id_guardar_registro;
        const sql = `SELECT * FROM guardar_registro WHERE id_guardar_registro='${id_guardar_registro}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    //Insertar datos 
app.post('/ruvi/guardar_registro', (req, res) => {
    const dato = {
        id_registrodoc: req.body.id_registrodoc,
        id_datos: req.body.id_datos,
        id_niveledu: req.body.id_niveledu,
        id_nucleofam: req.body.id_nucleofam,
        id_saludper: req.body.id_saludper,
        id_viviendaper: req.body.id_viviendaper,
        id_tiempoinf: req.body.id_tiempoinf,
        id_sitioinf: req.body.id_sitioinf,
    };

    const sql = `INSERT INTO guardar_registro SET id_registrodoc='${dato.id_registrodoc}',
                                                  id_datos='${dato.id_datos}',
                                                  id_niveledu='${dato.id_niveledu}',
                                                  id_nucleofam='${dato.id_nucleofam}',
                                                  id_saludper='${dato.id_saludper}',
                                                  id_viviendaper='${dato. id_viviendaper}',
                                                  id_tiempoinf='${dato. id_tiempoinf}',
                                                  id_sitioinf='${dato. id_sitioinf}',`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

//Actualizar
app.put('/ruvi/guardar_registro:id_guardar_registro', (req, res) => {
    const id_guardar_registro = req.params.id_guardar_registro;

    const dato = {
        id_registrodoc: req.body.id_registrodoc,
        id_datos: req.body.id_datos,
        id_niveledu: req.body.id_niveledu,
        id_nucleofam: req.body.id_nucleofam,
        id_saludper: req.body.id_saludper,
        id_viviendaper: req.body.id_viviendaper,
        id_tiempoinf: req.body.id_tiempoinf,
        id_sitioinf: req.body.id_sitioinf,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE guardar_registro SET ${sets.join(', ')} WHERE id_guardar_registro='${id_guardar_registro}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/guardar_registro/:id_guardar_registro', (req, res) => {
    const id_guardar_registro = req.params.id_guardar_registro;
    const sql = `DELETE FROM guardar_registro WHERE id_guardar_registro = '${id_guardar_registro}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});
/*******************
 *
 MP_nucleo_familiar 
 * 
 ******************/

app.get('/ruvi/nucleo_familiar', (req, res) => {
    console.log('Consultar datos del  nucleo familiar');
    var query = db.query('select * from nucleo_familiar', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/nucleo_familiar/:id_nucleofam', (req, res) => {
    const id_nucleofam = req.params.id_nucleofam;
    const sql = `SELECT * FROM nucleo_familiar WHERE id_nucleofam='${id_nucleofam}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                const [data] = result;
                res.json(data)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.post('/ruvi/nucleo_familiar', (req, res) => {
    const dato = req.body

    const sql = `INSERT INTO nucleo_familiar (descripcion)
  values ('${dato.descripcion}')`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.put('/ruvi/nucleo_familiar', (req, res) => {

    const dato = req.body

    const sql = `UPDATE nucleo_familiar SET id_nucleofam = '${dato.descripcion}'
          WHERE id_nucleofam = '${dato.descripcion}';`;

    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/nucleo_familiar/:id_nucleofam', (req, res) => {
    const id_nucleofam = req.params.id_nucleofam;
    const sql = `DELETE FROM niveles_educacion WHERE id_nucleofam = '${id_nucleofam}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/**********
 * 
 MP_roles
 *
 **********/

app.get('/ruvi/roles', (req, res) => {
    console.log('Consultar datos de los roles');
    var query = db.query('select * from roles', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/roles/:id_rol', (req, res) => {
        const id_rol = req.params.id_rol;
        const sql = `SELECT * FROM roles WHERE id_rol='${id_rol}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    // 
app.post('/ruvi/roles', (req, res) => {
    const dato = req.body

    const sql = `INSERT INTO roles (descripcion)
  values ('${dato.descripcion}')`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.put('/ruvi/roles', (req, res) => {

    const dato = req.body

    const sql = `UPDATE roles SET id_rol= '${dato.descripcion}'
          WHERE id_rol= '${dato.descripcion}';`;

    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/roles/:id_rol', (req, res) => {
    const id_rol = req.params.id_rol;
    const sql = `DELETE FROM roles WHERE id_rol = '${id_rol}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/*****
 * 
 MP_vivienda 
 * 
 ****/

app.get('/ruvi/vivienda', (req, res) => {
    console.log('Consultar datos de la vivienda');
    var query = db.query('select * from vivienda', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/vivienda/:id_viviendaper', (req, res) => {
        const id_viviendaper = req.params.id_viviendaper;
        const sql = `SELECT * FROM vivienda WHERE id_viviendaper='${id_viviendaper}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    // crear
app.post('/ruvi/vivienda', (req, res) => {
    const dato = req.body

    const sql = `INSERT INTO vivienda (descripcion)
  values ('${dato.descripcion}')`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.put('/ruvi/vivienda', (req, res) => {

    const dato = req.body

    const sql = `UPDATE vivienda SET id_viviendaper= '${dato.descripcion}'
          WHERE id_viviendaper= '${dato.descripcion}';`;

    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/vivienda/:id_viviendaper', (req, res) => {
    const id_viviendaper = req.params.id_viviendaper;
    const sql = `DELETE FROM vivienda WHERE id_viviendaper = '${id_viviendaper}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/*****
 * 
 MP_usuario 
 * 
 ****/

app.get('/ruvi/usuario', (req, res) => {
    console.log('Consultar datos de  los usuario');
    var query = db.query('select * from usuario', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/usuario/:id_datos', (req, res) => {
        const id_datos = req.params.id_datos;
        const sql = `SELECT * FROM usuario WHERE id_datos='${id_datos}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    //Insertar datos 
app.post('/ruvi/usuario', (req, res) => {
    const dato = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        sexo: req.body.sexo,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        discapacidad: req.body.discapacidad,
        desplazado: req.body.desplazado,
    };

    const sql = `INSERT INTO usuario SET nombres='${dato.nombres}',
                                                  apellidos='${dato.apellidos}',
                                                  edad='${dato.edad}',
                                                  sexo='${dato.sexo}',
                                                  direccion='${dato.direccion}',
                                                  telefono='${dato.telefono}',
                                                  correo='${dato.correo}',
                                                  discapacidad='${dato.discapacidad}',
                                                  desplazado='${dato.desplazado}',`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

//Actualizar
app.put('/ruvi/usuario:id_datos', (req, res) => {
    const id_datos = req.params.id_datos;

    const dato = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        sexo: req.body.sexo,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        discapacidad: req.body.discapacidad,
        desplazado: req.body.desplazado,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE usuario SET ${sets.join(', ')} WHERE id_datos='${id_datos}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/usuario/:id_datos', (req, res) => {
    const id_datos = req.params.id_datos;
    const sql = `DELETE FROM usuario WHERE id_datos = '${id_datos}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/*****
 * 
 MP_registro_documento 
 * 
 ****/

app.get('/ruvi/registro_documento', (req, res) => {
    console.log('Consultar datos de  los documentos');
    var query = db.query('select * from registro_documento', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/registro_documento/:id_registrodoc', (req, res) => {
        const id_registrodoc = req.params.id_registrodoc;
        const sql = `SELECT * FROM registro_documento WHERE id_registrodoc='${id_registrodoc}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    //Insertar datos 
app.post('/ruvi/registro_documento', (req, res) => {
    const dato = {
        tipo_documento: req.body.tipo_documento,
        numero_documento: req.body.numero_documento,
        registro_rivi: req.body.registro_rivi,
    };

    const sql = `INSERT INTO registro_documento SET tipo_documento='${dato.tipo_documento}',
                                                  numero_documento='${dato.numero_documento}',
                                                  registro_rivi='${dato.registro_rivi}',
                                                  `;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

//Actualizar
app.put('/ruvi/registro_documento:id_registrodoc', (req, res) => {
    const id_registrodoc = req.params.id_registrodoc;

    const dato = {
        tipo_documento: req.body.tipo_documento,
        numero_documento: req.body.numero_documento,
        registro_rivi: req.body.registro_rivi,

    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE registro_documento SET ${sets.join(', ')} WHERE id_registrodoc='${id_registrodoc}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/registro_documento/:id_registrodoc', (req, res) => {
    const id_registrodoc = req.params.id_registrodoc;
    const sql = `DELETE FROM registro_documento WHERE id_registrodoc = '${id_registrodoc}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/*****
 * 
 MP_registro_usuarios 
 * 
 ****/

app.get('/ruvi/registro_usuarios', (req, res) => {
    console.log('Consultar datos de  los usuarios');
    var query = db.query('select * from registro_usuarios', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/registro_usuarios/:id_regisusu', (req, res) => {
        const id_regisusu = req.params.id_regisusu;
        const sql = `SELECT * FROM registro_usuarios WHERE id_regisusu='${id_regisusu}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    //Insertar datos 
app.post('/ruvi/registro_usuarios', (req, res) => {
    const dato = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        correo: req.body.correo,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        id_rol: req.body.id_rol,

    };

    const sql = `INSERT INTO registro_usuarios SET nombre='${dato.nombre}',
                                                  apellido='${dato.apellido}',
                                                  edad='${dato.edad}',
                                                  sexo='${dato.sexo}',
                                                  telefono='${dato.telefono}',
                                                  correo='${dato.correo}',
                                                  usuario='${dato.usuario}',
                                                  contraseña='${dato.contraseña}',
                                                  id_rol='${dato.id_rol}',
                                                  `;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

//Actualizar
app.put('/ruvi/registro_usuarios:id_registrousu', (req, res) => {
    const id_registrousu = req.params.id_registrousu;

    const dato = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        correo: req.body.correo,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        id_rol: req.body.id_rol,

    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE registro_usuarios SET ${sets.join(', ')} WHERE id_registrousu='${id_registrousu}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/registro_usuarios/:id_registrousu', (req, res) => {
    const id_registrousu = req.params.id_registrousu;
    const sql = `DELETE FROM registro_usuarios WHERE id_registrousu = '${id_registrousu}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/*****
 * 
 MP_salud 
 * 
 ****/

app.get('/ruvi/salud', (req, res) => {
    console.log('Consultar datos de la salud');
    var query = db.query('select * from salud', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/salud/:id_saludper', (req, res) => {
        const id_saludper = req.params.id_saludper;
        const sql = `SELECT * FROM salud WHERE id_saludper='${id_saludper}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    //Insertar datos 
app.post('/ruvi/salud', (req, res) => {
    const dato = {
        nombre_eps: req.body.nombre_eps,
        descripcion: req.body.descripcion,
    };

    const sql = `INSERT INTO salud SET nombre_eps='${dato.nombre_eps}',
                                                  descripcion='${dato.descripcion}',`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

//Actualizar
app.put('/ruvi/salud:id_saludper', (req, res) => {
    const id_saludper = req.params.id_saludper;

    const dato = {
        nombre_eps: req.body.nombre_eps,
        descripcion: req.body.descripcion,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE salud SET ${sets.join(', ')} WHERE id_saludper='${id_saludper}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/salud/:id_saludper', (req, res) => {
    const id_saludper = req.params.id_saludper;
    const sql = `DELETE FROM salud WHERE id_saludper = '${id_saludper}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});

/*****
 * 
 MP_sitio_labor 
 * 
 ****/

app.get('/ruvi/sitio-labor', (req, res) => {
    console.log('Consultar datos del sitio donde labora');
    var query = db.query('select *  from sitio_labor', (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/sitio-labor/:id-sitioinf', (req, res) => {
        const id = req.params.id;
        const sql = `SELECT * FROM sitio-labor WHERE id_sitioinf='${id}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    //Insertar datos 
app.post('/ruvi/sitio-labor', (req, res) => {
    const dato = {
        direccion: req.body.direccion,
        foto: req.body.foto,
        producto: req.body.producto,
    };

    const sql = `INSERT INTO sitio-labor SET direccion='${dato.direccion}',
                                                  foto='${dato.foto}',
                                                  producto='${dato.producto}'`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})

//Actualizar
app.put('/ruvi/sitio-labor/:id', (req, res) => {
    const id = req.params.id;

    const dato = {
        direccion: req.body.direccion,
        foto: req.body.foto,
        producto: req.body.producto,
    };
    let sets = [];
    for (i in dato) {
        if (dato[i] || dato[i] == 0) {
            sets.push(`${i}='${dato[i]}'`);
        }
    }

    const sql = `UPDATE sitio-labor SET ${sets.join(', ')} WHERE id_sitioinf='${id}';`;
    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/sitio-labor/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM sitio-labor WHERE id_sitioinf = '${id}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});


/*****
 * 
 MP_tiempo_labor 
 * 
 ****/
app.get('/ruvi/tiempo-labor', (req, res) => { //COMO YO LO QUIERA LLAMAR
    console.log('Consultar datos de  labor informal');
    var query = db.query('select * from tiempo_labor', (error, result) => { //COMO ESTA EN LA BASE DE DATOS
        try {
            if (error) {
                throw error;
            } else {
                console.log(result);
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
})
app.get('/ruvi/tiempo-labor/:id', (req, res) => {
        const id = req.params.id;
        const sql = `SELECT * FROM tiempo_labor WHERE id_tiempoinf='${id}';`;
        const query = db.query(sql, (error, result) => {
            try {
                if (error) {
                    throw error;
                } else {
                    console.log(result);
                    const [data] = result;
                    res.json(data)
                }
            } catch (error) {
                res.json({ error: error.message })
            }
        });
    })
    // crear
app.post('/ruvi/tiempo-labor', (req, res) => {
    const dato = req.body

    const sql = `INSERT INTO tiempo_labor (descripcion)
  values ('${dato.descripcion}')`;

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.put('/ruvi/tiempo-labor', (req, res) => {

    const dato = req.body

    const sql = `UPDATE tiempo_labor SET id_tiempoinf= '${dato.descripcion}'
          WHERE id_tiempoinf= '${dato.descripcion}';`;

    console.log(sql);

    db.query(sql, (error, result) => {
        if (error) {
            res.json({ error: error })
        } else {
            res.json(result)
        }
    });
})
app.delete('/ruvi/tiempo-labor/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM tiempo_labor WHERE id_tiempoinf = '${id}';`;
    const query = db.query(sql, (error, result) => {
        try {
            if (error) {
                throw error;
            } else {
                res.json(result)
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    });
});


app.listen(PORT, function() {
    console.log(`Server running at port ${PORT}`);
});