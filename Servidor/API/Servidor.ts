// Importação de módulos e bibliotecas
import express from "express";

const servidor = express();

servidor.listen(4444, () => console.log("\n[*] O servidor está rodando..."));
