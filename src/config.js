const defaultConfig = {
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  isProduction: false,
  mysql: {
    host: '192.168.99.100',
    port: 3306,
    db: 'payment-dev',
    username: 'root',
    password: '',
  }
};

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
    mysql: {
      db: 'payment-prod',
    }
  }
}[process.env.NODE_ENV || 'development'];

export default Object.assign({...defaultConfig}, environment);
