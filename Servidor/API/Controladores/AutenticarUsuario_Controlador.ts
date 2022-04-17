// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { AutenticarUsuario_Service } from "../Servicos/AutenticarUsuario_Servico";

class AutenticarUsuario_Controlador {
    async tratar(request: Request, response: Response) {
        const { email, senha } = request.body;
        const autenticarUsuario = new AutenticarUsuario_Service();
        const token = await autenticarUsuario.executar({ email, senha });
        
        return response.json(token);
    }
}

export { AutenticarUsuario_Controlador };
