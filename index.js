const mongoose = require('mongoose');
const model = require('./models/user');

CRUD()

async function CRUD () {
    try{
        //connection to database
        const URL = 'mongodb+srv://api-licencia:Zm8wZgaedO3lKaTC@cluster0.zxewk.mongodb.net/licencias?retryWrites=true&w=majority'

        let rta = await mongoose.connect(URL, {});   
    //    console.log(rta);
        console.log('Base de datos conectada');

        //create
        console.log('Create');
        const user = 
            ({name: 'Jose', lastname: 'Mei', mail: "mail@gmail.com", priority: 'low', area:"CTO", isAdmin:true},
            {name: 'Ana', lastname: 'Gonzalez', mail: "otro@gmail.com", priority: 'low',area:"COO", isAdmin:false},
            {name: 'Daniel', lastname: 'Gallo', mail: "nose@gmail.com", priority: 'high',area:"CPO",isAdmin:false})
        const userSaveModel = model(user);
        let userSave = await userSaveModel.save();
        console.log(userSave);

        //read
        console.log('Read all');
        let users = await model.find({});
        console.log(users);
    }    
    catch(error){
        console.log(`error en CRUD: ${error}`);
        throw new Error('Error al conectarse a la base de datos');
    }
}
