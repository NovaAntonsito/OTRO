"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 80;
app.get('', (req, res) => {
    res.send('hola pibe desde aws');
});
app.listen(port, () => {
    console.log(`El servidor esta iniciado en ${port}`);
});
