const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ruvi",
    port: 3306,
    multipleStatements: true
});

db.connect(function(error) {
    if (error)
        console.log(error);
    else
        console.log(`Base de datos conectada!`);
});



app.listen(PORT, function() {
    console.log(`Server running at port ${PORT}`);
});