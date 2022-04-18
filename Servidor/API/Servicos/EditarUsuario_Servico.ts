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
        const usuarioRepositorio = getCustomRepository(Usuario_Repositorio);
        
        //Regras
        if(!id) { throw new Error("O cadastro não foi atualizado! ID ausente."); }
        if(!nome) { throw new Error("O cadastro não foi atualizado! Nome ausente."); }
        if(!email) { throw new Error("O cadastro não foi atualizado! E-mail ausente."); }
        if(!senha) { throw new Error("O cadastro não foi atualizado! Senha ausente."); }
        const usuario = usuarioRepositorio.create({ id, nome, ocupacao, email, senha, foto_perfil, administrador });
        const usuarioAlterado = await usuarioRepositorio.save(usuario);

        return usuarioAlterado;
    }
}

export { EditarUsuario_Servico };
