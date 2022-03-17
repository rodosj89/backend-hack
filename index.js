const users = [{name: 'Jose', lastname: 'Mei', mail: "mail@gmail.com", priority: 'low', area:"CTO", isAdmin:true},
            {name: 'Ana', lastname: 'Gonzalez', mail: "otro@gmail.com", priority: 'low',area:"COO", isAdmin:false},
            {name: 'Daniel', lastname: 'Gallo', mail: "nose@gmail.com", priority: 'high',area:"CPO",isAdmin:false}];
const User = require('./models/user');
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;
const hostDB = process.env.HOST_DB || 'mongodb+srv://api-licencia:Zm8wZgaedO3lKaTC@cluster0.zxewk.mongodb.net/licencias?retryWrites=true&w=majority';

// mongoose.set("useFindAndModify", false);
mongoose.connect(`${hostDB}`, { useNewUrlParser: true}, (err, res) => {
    if (err)
        throw err;
    else {
        console.log(`La conexion a la base de datos fue exitosa`);
        app.listen(port, () => {
            console.log(`Iniciando Servidor...`);
            console.log(`http://localhost:${port}/api/v1/`);
        });
       /* User.collection.insert(users, function (err, docs) {
          if (err){ 
              return console.error(err);
          } else {
            console.log("Multiple documents inserted to Collection");
          }
        });
        */
    }
});
