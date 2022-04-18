// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { BuscarEtiquetaPorId_Servico } from "../Servicos/BuscarEtiquetaPorId_Servico";

class BuscarEtiquetaPorId_Controlador {
    async tratar(request: Request, response: Response) {
        const id = request.params.id;
        const buscarEtiquetaPorId = new BuscarEtiquetaPorId_Servico();
        const etiqueta = await buscarEtiquetaPorId.executar(id);
        
        return response.json(etiqueta);
    }
}

export { BuscarEtiquetaPorId_Controlador };