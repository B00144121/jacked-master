import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true }, // Added age
    sex: { type: String, required: true }, // Added sex
    weight: { type: Number, default: null },
    height: { type: Number, default: null },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
