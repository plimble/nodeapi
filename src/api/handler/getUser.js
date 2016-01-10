import { app } from 'api/app';
import ioc from 'ioc';

console.log(app);

app.use(function *index() {
  this.body = yield ioc.GetUserUsecase.do();
});
