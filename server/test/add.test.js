import mongoose from 'mongoose';
import User from '../models/user' ;

const mongoUrl = "mongodb+srv://admin:828s8jkx0kIOv1ds@test-rendalo-jaywk.mongodb.net/test?retryWrites=true&w=majority";

describe('Insertar', () => {
  
    beforeAll(async () => {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
          });
    });
  
    afterAll(async () => {
      await mongoose.close();
      
    });

    it('Insertar un User', () => {
        const user = new User ({nombre: 'foo2', email: 'foo2@gmail.com', telefono: '123456789'})
        user.save();
        const expected = 'foo2';
        const actual = user.nombre
        expect(actual).toEqual(expected);
        
      });
})