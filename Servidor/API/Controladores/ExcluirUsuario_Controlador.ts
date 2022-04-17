// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ExcluirUsuario_Servico } from "../Servicos/ExcluirUsuario_Servico";

class ExcluirUsuario_Controlador {
    async tratar(request: Request, response: Response) {
        const { id_usuario } = request;
        const excluirUsuario = new ExcluirUsuario_Servico();
        const usuario = await excluirUsuario.executar(id_usuario);
        
        return response.json(usuario);
    }
}

export { ExcluirUsuario_Controlador };
