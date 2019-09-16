import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema ({
    nombre: {type: String, maxlength: 50, unique: true, required: true},
    telefono: {type: String, maxlength: 20},
    email: {type: String, maxlength: 50, unique: true, required: true},
    createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('user', userSchema);

export default User;