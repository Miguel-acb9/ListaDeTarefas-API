// Importação de módulos e bibliotecas
import "../BancoDeDados";
import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { rotiador } from "./Rotas/Rotas";
import { TratadorDeErros } from "./Middleware/TratadorDeErros";

const servidor = express();

// Middleware
servidor.use(express.json());
servidor.use(rotiador);
servidor.use(TratadorDeErros);

// Servidor
console.clear();
console.log("============================================================");
console.log("                          Servidor                          ");
console.log("============================================================");
servidor.listen(4444, () => console.log("\nSOLICITAÇÕES"));
