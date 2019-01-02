"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gamesGet = yield database_1.default.query('SELECT * FROM games');
            res.json({
                ok: 'true',
                gamesGet
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gameGet = yield database_1.default.query(`SELECT * FROM games WHERE id = ${req.params.id}`);
            if (gameGet.length == 0) {
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
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let hola = req.body;
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            console.log(hola);
            res.json({
                ok: 'true',
                text: 'Juego Guardado',
                hola: hola
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gameUpdate = yield database_1.default.query(`UPDATE games set ? WHERE id = ${req.params.id}`, [req.body]);
            console.log(gameUpdate);
            if (gameUpdate.affectedRows == 0) {
                res.json({
                    ok: 'false',
                    text: `El juego id: ${req.params.id} NO se ha Actualizado`
                });
                return;
            }
            res.json({
                ok: 'true',
                text: `Juego Actualizado ${req.params.id}`
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gameDelete = yield database_1.default.query(`DELETE FROM games WHERE id = ${req.params.id}`);
            if (gameDelete.affectedRows == 0) {
                res.json({
                    ok: 'false',
                    text: `El juego id: ${req.params.id} NO se ha Eliminado`
                });
                return;
            }
            res.json({
                ok: 'true',
                text: `Juego Eliminado ${req.params.id}`
            });
        });
    }
}
const gamesControllerss = new GamesControllers();
exports.default = gamesControllerss;
