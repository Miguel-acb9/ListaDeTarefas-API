// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { BuscarUsuarioPorId_Servico } from "../Servicos/BuscarUsuarioPorId_Servico";

class BuscarUsuarioPorId_Controller {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const buscarUsuarioPorId = new BuscarUsuarioPorId_Servico();
        const usuario = await buscarUsuarioPorId.executar(id);
        
        return response.json(usuario);
    }
}

export { BuscarUsuarioPorId_Controller };