// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { EditarEtiquetaPorId_Servico } from "../Servicos/EditarEtiquetaPorId_Servico";

class EditarEtiquetaPorId_Controlador {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const { nome } = request.body;
        const editarEtiqueta = new EditarEtiquetaPorId_Servico();
        const etiqueta = await editarEtiqueta.executar(id, nome);
        
        return response.json(etiqueta);
    }
}

export { EditarEtiquetaPorId_Controlador };
