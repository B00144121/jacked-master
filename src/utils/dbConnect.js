import mongoose from 'mongoose';

// Retrieve the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGO_URI;

// Ensure the URI is available
if (!MONGODB_URI) {
    throw new Error('Please define the MONGO_URI environment variable in .env.local');
}

// Global variable to prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
