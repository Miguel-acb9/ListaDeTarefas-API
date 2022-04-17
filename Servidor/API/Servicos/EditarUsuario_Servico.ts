// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Usuario_Repositorio } from "../Modelos/Repositorios/Usuario_Repositorio"

interface IUsuario {
    id: string;
    nome: string;
    ocupacao: string;
    email: string;
    senha: string;
    foto_perfil?: string;
    administrador?: boolean;
}

class EditarUsuario_Servico {
    async executar({ id, nome, ocupacao, email, senha, foto_perfil = "", administrador = false }: IUsuario) {
        const repositorioUsuario = getCustomRepository(Usuario_Repositorio);
        const usuario = repositorioUsuario.create({ id, nome, ocupacao, email, senha, foto_perfil, administrador });
        const usuarioAlterado = await repositorioUsuario.save(usuario);

        return usuarioAlterado;
    }
}

export { EditarUsuario_Servico };
