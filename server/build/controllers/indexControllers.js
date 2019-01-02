"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'La API esta en /API/GAMES' });
    }
}
const indexControllers = new IndexController();
exports.default = indexControllers;
