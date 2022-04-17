// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { NovoUsuario_Servico } from "../Servicos/NovoUsuario_Servico";

class NovoUsuario_Controlador {
    async tratar(request: Request, response: Response) {
        const { nome, ocupacao, email, senha, foto_perfil, administrador } = request.body;
        const novoUsuario = new NovoUsuario_Servico();
        const usuario = await novoUsuario.executar({ nome, ocupacao, email, senha, foto_perfil, administrador });
        
        return response.json(usuario);
    }
}

export { NovoUsuario_Controlador };
