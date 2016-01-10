import Sequelize from 'sequelize';

export default function mysql(host: string, port: number, db: string, username: string, password: string): Sequelize {
  return new Sequelize(db, username, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
}
