// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { NovaEtiqueta_Servico } from "../Servicos/NovaEtiqueta_Servico";

class NovaEtiqueta_Controlador {
    async tratar(request: Request, response: Response) {
        const { nome } = request.body;
        const novaEtiqueta = new NovaEtiqueta_Servico();
        const etiqueta = await novaEtiqueta.executar(nome);
        
        return response.json(etiqueta);
    }
}

export { NovaEtiqueta_Controlador };
