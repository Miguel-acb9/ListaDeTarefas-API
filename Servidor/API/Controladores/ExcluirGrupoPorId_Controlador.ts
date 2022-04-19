// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ExcluirGrupoPorId_Servico } from "../Servicos/ExcluirGrupoPorId_Servico";

class ExcluirGrupoPorId_Controlador {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const excluirGrupo = new ExcluirGrupoPorId_Servico();
        const grupo = await excluirGrupo.executar(id);
        
        return response.json(grupo);
    }
}

export { ExcluirGrupoPorId_Controlador };
