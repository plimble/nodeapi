import { app } from 'api/app';
import ioc from 'ioc';


app.route({
  method: 'GET',
  path: '/{id}',
  handler: (request, reply)=>{
    const input = {
      id: request.params.id,
    };

    ioc.GetUserUsecase.do(input).then((output)=>{
      return reply(output);
    }).catch((err) => {
      return reply(err);
    });
  }
});
