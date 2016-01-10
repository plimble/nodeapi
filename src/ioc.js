import bottlejs from 'bottlejs';
import config from 'config';
import * as usecase from 'app/usecase';
import * as store from 'external/store';

const bottle = new bottlejs.Bottle();

bottle.constant('config', config);

// External
bottle.service('mysql', store.mysql, 'config.mysql.host', 'config.mysql.port', 'config.mysql.db', 'config.mysql.username', 'config.mysql.password');
bottle.service('storeModel', store.createModels, 'mysql');
bottle.service('UserStore', store.UserStore, 'storeModel.user');

// Usecase
bottle.service('GetUserUsecase', usecase.GetUser, 'UserStore');

export default bottle.container;
