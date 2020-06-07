import { Request, Response, Router } from 'express';

const home = Router();

home.get('/', (_request: Request, response: Response) => {
  response.send({
    data: {
      photoUrl: 'https://i.ytimg.com/vi/CrdZvybGydM/maxresdefault.jpg',
      name: 'Ash Yusufzai',
      job: 'Javascript Developer',
      favoriteFood: 'Sushi'
    },
    success: true
  })
});

export default home;
