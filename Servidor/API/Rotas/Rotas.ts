// Importação de módulos e bibliotecas
import { Router } from "express";
import { ValidarUsuario } from "../Middleware/ValidarUsuario";
import { NovoUsuario_Controlador } from "../Controladores/NovoUsuario_Controlador";
import { NovaEtiqueta_Controlador } from "../Controladores/NovaEtiqueta_Controlador";
import { EditarUsuario_Controlador } from "../Controladores/EditarUsuario_Controlador";
import { ExcluirUsuario_Controlador } from "../Controladores/ExcluirUsuario_Controlador";
import { AutenticarUsuario_Controlador } from "../Controladores/AutenticarUsuario_Controlador";
import { BuscarUsuarioPorId_Controller } from "../Controladores/BuscarUsuarioPorId_Controlador";
import { BuscarEtiquetaPorId_Controlador } from "../Controladores/BuscarEtiquetaPorId_Controlador";
import { EditarEtiquetaPorId_Controlador } from "../Controladores/EditarEtiquetaPorId_Controlador";
import { ExcluirEtiquetaPorId_Controlador } from "../Controladores/ExcluirEtiquetaPorId_Controlador";

import { NovoGrupo_Controlador } from "../Controladores/NovoGrupo_Controlador";
import { BuscarGrupoPorId_Controlador } from "../Controladores/BuscarGrupoPorId_Controlador";
import { EditarGrupoPorId_Controlador } from "../Controladores/EditarGrupoPorId_Controlador";
import { ExcluirGrupoPorId_Controlador } from "../Controladores/ExcluirGrupoPorId_Controlador";

const rotiador = Router();

const novoUsuario = new NovoUsuario_Controlador();
const novaEtiqueta = new NovaEtiqueta_Controlador();
const editarUsuario = new EditarUsuario_Controlador();
const excluirUsuario = new ExcluirUsuario_Controlador();
const autenticarUsuario = new AutenticarUsuario_Controlador();
const buscarUsuarioPorId = new BuscarUsuarioPorId_Controller();
const buscarEtiquetaPorId = new BuscarEtiquetaPorId_Controlador();
const editarEtiquetaPorId = new EditarEtiquetaPorId_Controlador();
const excluirEtiquetaPorId = new ExcluirEtiquetaPorId_Controlador();

const novoGrupo = new NovoGrupo_Controlador();
const buscarGrupoPorId = new BuscarGrupoPorId_Controlador();
const editarGrupoPorId = new EditarGrupoPorId_Controlador();
const excluirGrupoPorId = new ExcluirGrupoPorId_Controlador();

// Rotas GET dos controladores administrativos
rotiador.get("/grupos/:id", buscarGrupoPorId.tratar);
rotiador.get("/usuarios/:id", buscarUsuarioPorId.tratar);
rotiador.get("/etiquetas/:id", buscarEtiquetaPorId.tratar);

// Rotas POST dos controladores administrativos
rotiador.post("/grupos/cadastrar", ValidarUsuario, novoGrupo.tratar);
rotiador.post("/usuarios/cadastrar", novoUsuario.tratar);
rotiador.post("/usuarios/login", autenticarUsuario.tratar);
rotiador.post("/etiquetas/cadastrar", novaEtiqueta.tratar);

// Rotas PUT dos controladores administrativos
rotiador.put("/grupos/editar/:id", editarGrupoPorId.tratar);
rotiador.put("/etiquetas/editar/:id", editarEtiquetaPorId.tratar);
rotiador.put("/usuarios/editar", ValidarUsuario, editarUsuario.tratar);

// Rotas DELETE dos controladores administrativos
rotiador.delete("/grupos/excluir/:id", excluirGrupoPorId.tratar);
rotiador.delete("/etiquetas/excluir/:id", excluirEtiquetaPorId.tratar);
rotiador.delete("/usuarios/excluir", ValidarUsuario, excluirUsuario.tratar);

export { rotiador };
