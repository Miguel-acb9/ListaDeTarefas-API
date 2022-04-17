// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { EditarUsuario_Servico } from "../Servicos/EditarUsuario_Servico";

class EditarUsuario_Controlador {
    async tratar(request: Request, response: Response) {
        const { id_usuario } = request;
        const { nome, ocupacao, email, senha, foto_perfil } = request.body;
        const editarUsuario = new EditarUsuario_Servico();
        const administrador = await editarUsuario.executar({ id: id_usuario, nome, ocupacao, email, senha, foto_perfil });
        
        return response.json(administrador);
    }
}

export { EditarUsuario_Controlador };
