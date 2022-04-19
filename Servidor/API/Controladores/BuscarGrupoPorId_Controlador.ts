// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { BuscarGrupoPorId_Servico } from "../Servicos/BuscarGrupoPorId_Servico";

class BuscarGrupoPorId_Controlador {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const buscarGrupoPorId = new BuscarGrupoPorId_Servico();
        const grupo = await buscarGrupoPorId.executar(id);
        
        return response.json(grupo);
    }
}

export { BuscarGrupoPorId_Controlador };