import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

export function createModels(db: Sequelize) {
  const models = {};
  const files = fs.readdirSync(path.resolve(__dirname, 'schema'));

  for (const file of files) {
    const fileName = path.basename(file, '.js');
    const schema = require(`./schema/${fileName}`).default;
    models[fileName] = db.define(fileName, schema.attrs, schema.dbSettings);
  }

  return models;
}

export async function syncTables(models, force: bool = false) {
  for (const modelName in models) {
    if (models.hasOwnProperty(modelName)) {
      await models[modelName].sync({force});
    }
  }

  models.user.create({
    id: '1',
    name: 'test',
  });
  console.log('create');
}
