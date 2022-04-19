// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { NovoGrupo_Servico } from "../Servicos/NovoGrupo_Servico";

class NovoGrupo_Controlador {
    async tratar(request: Request, response: Response) {
        const { nome } = request.body;
        const { id_usuario } = request;
        const novoGrupo = new NovoGrupo_Servico();
        const grupo = await novoGrupo.executar(id_usuario, nome);
        
        return response.json(grupo);
    }
}

export { NovoGrupo_Controlador };
