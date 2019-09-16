import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/index';
dotenv.config({ path: 'variables.env'});

// Conexion a mongo
mongoose.Promise = global.Promise;
const dbUser= process.env.DB_USER;
const dbPass= process.env.DB_PASS;

const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@rendalo-lowlf.mongodb.net/rendalo?retryWrites=true&w=majority`
mongoose
    .connect(dbUrl, { useCreateIndex:true, useNewUrlParser: true })
    .then(mongoose => console.log('Database Connected'))
    .catch(error => console.log(error))
    mongoose.set('setFindAndModify', false);

const app = express();
app.use(morgan('dev'));
app.use(cors());

// Trabaje en formato json
app.use(express.json());
// Trabaje con metodos POST
app.use(express.urlencoded({ extended: true}))

// Rutas
app.use('/api', router);

app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log(`Server listening on localhost:${app.get('port')}`)
})