import NodeMediaServer from './node_media_server';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

var nms = new NodeMediaServer(config);

async function run() {
  console.log('Connecting...')
  await mongoose.connect(String(process.env.DB_URL), {

  });

  console.log('Database Connected');

  nms.run();

}

run().catch(error => console.log(error));

