import koa from 'koa';
import ioc from 'ioc';
import { syncTables } from 'external/store';

export const app = koa();

export default async function run() {
  // sync db
  await syncTables(ioc.storeModel, true);
  console.log('start');

  app.listen(3000);
}
