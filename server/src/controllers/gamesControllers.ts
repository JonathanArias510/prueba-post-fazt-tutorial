import { Response, Request } from 'express';

import database from '../database';

class GamesControllers{


  public async list(req:Request, res:Response){

    const gamesGet = await database.query('SELECT * FROM games');
    res.json({
      ok: 'true',
      gamesGet
    });

  }

  public async getOne(req:Request, res:Response){

    const gameGet = await database.query(`SELECT * FROM games WHERE id = ${ req.params.id }`);
    if(gameGet.length == 0){
      res.json({
        ok: 'false',
        text: 'Juego no encontrado'
      });
      return;
    }

    res.json({
      ok: 'true',
      gameGet
    });
  }

  public async create( req:Request, res:Response): Promise<void>{


    let hola = req.body;

    await database.query('INSERT INTO games set ?', [req.body])
    console.log(hola)
    res.json({
      ok: 'true',
      text: 'Juego Guardado',
      hola : hola
    })

  }

  public async update( req:Request, res:Response ){

    const gameUpdate = await database.query(`UPDATE games set ? WHERE id = ${ req.params.id }`, [req.body]);
    console.log(gameUpdate);

    if (gameUpdate.affectedRows == 0) {
      res.json({
        ok: 'false',
        text: `El juego id: ${ req.params.id } NO se ha Actualizado`
      })
      return;
    }

    res.json({
      ok: 'true',
      text: `Juego Actualizado ${ req.params.id }`
    })

  }

  public async delete( req:Request, res:Response ){

    const gameDelete = await database.query(`DELETE FROM games WHERE id = ${ req.params.id }`);

    if(gameDelete.affectedRows == 0 ){
      res.json({
        ok: 'false',
        text: `El juego id: ${ req.params.id } NO se ha Eliminado`
      })
      return;
    }

    res.json({
      ok: 'true',
      text: `Juego Eliminado ${ req.params.id }`
    })

  }


}

const gamesControllerss = new GamesControllers();
export default gamesControllerss;
