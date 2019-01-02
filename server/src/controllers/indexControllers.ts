import { Response, Request } from 'express';


class IndexController{


  public index(req:Request, res:Response){

    res.json({ text: 'La API esta en /API/GAMES' });

  }


}

const indexControllers = new IndexController();
export default indexControllers;
