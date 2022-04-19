// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { EditarGrupoPorId_Servico } from "../Servicos/EditarGrupoPorId_Servico";

class EditarGrupoPorId_Controlador {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const { nome } = request.body;
        const editarGrupo = new EditarGrupoPorId_Servico();
        const grupo = await editarGrupo.executar(id, nome);
        
        return response.json(grupo);
    }
}

export { EditarGrupoPorId_Controlador };