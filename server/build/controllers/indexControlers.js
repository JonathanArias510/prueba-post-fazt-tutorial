"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('hello');
    }
}
const indexControllers = new IndexController();
exports.default = indexControllers;
