import mongoose from 'mongoose';

const connection = {}; // we will use this for detect if we already connect  to db

async function connect() {
  if (connection.isConnected) {
    console.log('already connected.');
    return;
  }
  if (mongoose.connections.length > 0) {
    //mongoose.connections is array that contains all the previous connections
    connection.isConnected = mongoose.connections[0].readyState;
    //set status of current connection
    if (connection.isConnected === 1) {
      // connection is connected and ready
      console.log('use of previous connection');
      return;
    }
    //if connection is not ready disconnect
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }); // new connection
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected bc develeopment');
      // in the dev connect and disconnect continuesly will harm processor,memory
    }
  }
}

const db = { connect, disconnect };
export default db;
