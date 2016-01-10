import Hapi from 'hapi';
import ioc from 'ioc';
import { syncTables } from 'external/store';

export const app = new Hapi.Server();

app.connection({
  host: ioc.config.host,
  port: ioc.config.port,
});

export default async function run() {
  // sync db
  await syncTables(ioc.storeModel, true);
  console.log('start');

  app.start((err)=>{
    if (err) {
      throw err;
    }

    console.log('Server running at:', app.info.uri);
  });
}
