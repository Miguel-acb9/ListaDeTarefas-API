// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ExcluirEtiquetaPorId_Servico } from "../Servicos/ExcluirEtiquetaPorId_Servico";

class ExcluirEtiquetaPorId_Controlador {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const etiquetaUsuario = new ExcluirEtiquetaPorId_Servico();
        const etiqueta = await etiquetaUsuario.executar(id);
        
        return response.json(etiqueta);
    }
}

export { ExcluirEtiquetaPorId_Controlador };
