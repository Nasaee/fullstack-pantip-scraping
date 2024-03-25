import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

export async function mongoConnect() {
  if (process.env.MONGO_URL && typeof process.env.MONGO_URL === 'string') {
    await mongoose.connect(process.env.MONGO_URL);
  } else {
    console.error('MONGO_URI is not defined');
  }
}
