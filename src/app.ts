import NodeMediaServer from './node_media_server';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { StreamModel } from './db';

dotenv.config();

var nms = new NodeMediaServer(config);

function streamByPath(path: string) {
  return path.split('/')[2];
}

async function run() {
  console.log('Connecting...')
  await mongoose.connect(String(process.env.DB_URL), {

  });

  console.log('Database Connected');

  nms.on('prePublish', async (id: string, StreamPath: string, args: any) => {
    // try {
    //   const stream = await StreamModel.findById(streamByPath(StreamPath));
    //   if(stream.key != args.pwd){
    //     let session = nms.getSession(id);
    //     session.reject();
    //     console.log('[Rejected]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    //   } else {
    //     console.log('[Connected]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    //   }
    // } catch(e) {
    //   console.log(e);
    //   let session = nms.getSession(id);
    //   session.reject();
    //   console.log('[Rejected]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    // }
  });

  nms.on('postPublish', async (id: any, path: any, args: any) => {
    const stream = await StreamModel.findByIdAndUpdate(streamByPath(path), { isLive: true });
  });

  nms.on('donePublish', async (id: any, path: any, args: any) => {
    const stream = await StreamModel.findByIdAndUpdate(streamByPath(path), { isLive: false });
  });

  nms.run();

}

run().catch(error => console.log(error));

