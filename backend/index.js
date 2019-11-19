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
    port: 3306,
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


// MP_niveles_educacion
app.get('/', function(req, res) {
    console.log('Página de Inicio ');
    res.send("Bienvenidos al servidor <strong> TuMap </strong>");
});

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


// MP_guardar_registro
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

// MP_nucleo_familiar
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


// MP_roles
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
    // crear
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

// MP_roles
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
    // crear
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

app.listen(PORT, function() {
    console.log(`Server running at port ${PORT}`);
});