// Importação de módulos e bibliotecas
import { Router } from "express";
import { ValidarUsuario } from "../Middleware/ValidarUsuario";
import { NovoUsuario_Controlador } from "../Controladores/NovoUsuario_Controlador";
import { EditarUsuario_Controlador } from "../Controladores/EditarUsuario_Controlador";
import { ExcluirUsuario_Controlador } from "../Controladores/ExcluirUsuario_Controlador";
import { AutenticarUsuario_Controlador } from "../Controladores/AutenticarUsuario_Controlador";
import { BuscarUsuarioPorId_Controller } from "../Controladores/BuscarUsuarioPorId_Controlador";

const rotiador = Router();

const novoUsuario = new NovoUsuario_Controlador();
const editarUsuario = new EditarUsuario_Controlador();
const excluirUsuario = new ExcluirUsuario_Controlador();
const autenticarUsuario = new AutenticarUsuario_Controlador();
const buscarUsuarioPorId = new BuscarUsuarioPorId_Controller();

// Rotas GET dos controladores administrativos
rotiador.get("/usuarios/:id", buscarUsuarioPorId.tratar);

// Rotas POST dos controladores administrativos
rotiador.post("/usuarios/login", autenticarUsuario.tratar);
rotiador.post("/usuarios/cadastrar", novoUsuario.tratar);

// Rotas PUT dos controladores administrativos
rotiador.put("/usuarios/editar", ValidarUsuario, editarUsuario.tratar);

// Rotas DELETE dos controladores administrativos
rotiador.delete("/usuarios/excluir", ValidarUsuario, excluirUsuario.tratar);

export { rotiador };
