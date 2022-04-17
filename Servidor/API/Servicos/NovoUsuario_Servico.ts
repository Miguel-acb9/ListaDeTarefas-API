// Importação de módulos e bibliotecas
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { Usuario_Repositorio } from "../Modelos/Repositorios/Usuario_Repositorio";

interface IUsuario {
    nome: string;
    ocupacao: string;
    email: string;
    senha: string;
    foto_perfil?: string;
    administrador?: boolean;
}

class NovoUsuario_Servico {
    async executar({ nome, ocupacao, email, senha, foto_perfil = "", administrador = false }: IUsuario) {
        const usuarioRepositorio = getCustomRepository(Usuario_Repositorio);
        
        // Regras para cadastro do usuário
        if(!nome) { throw new Error("Nome ausente."); }
        if(!email) { throw new Error("E-mail ausente."); }
        if(!senha) { throw new Error("Senha ausente."); }
        const usuarioExistente = await usuarioRepositorio.findOne({ email });
        if(usuarioExistente) { throw new Error("Esse e-mail já pertence a um cadastro."); }
        if(senha.length < 6) { throw new Error("Senha inferior a 6 dígitos."); }
        const senhaHash = await hash(senha, 8);
        
        const usuario = usuarioRepositorio.create({ nome, ocupacao, email, senha: senhaHash, foto_perfil, administrador });
        await usuarioRepositorio.save(usuario);

        return usuario;
    }
}

export { NovoUsuario_Servico };
