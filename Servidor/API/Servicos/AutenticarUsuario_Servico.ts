// Importação de módulos e bibliotecas
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { Usuario_Repositorio } from "../Modelos/Repositorios/Usuario_Repositorio";

interface ILoginUsuario {
    email: string;
    senha: string;
}

class AutenticarUsuario_Service {
    async executar({ email, senha }: ILoginUsuario){
        const usuarioRepositorio = getCustomRepository(Usuario_Repositorio);
        
        // Regras de login
        if(!email) { throw new Error("E-mail ausente."); };
        if(!senha) { throw new Error("Senha ausente."); };
        const usuario = await usuarioRepositorio.findOne({ email });
        if(!usuario) { throw new Error("E-mail ou senha incorreta."); }
        const senhaCorrespondente = await compare(senha, usuario.senha);
        if(!senhaCorrespondente) { throw new Error("E-mail ou senha incorreta."); }
        const token = sign(
            { email: usuario.email, },
            "ChaveSecreta",
            { subject: usuario.id, expiresIn: "1d" }
        );
        
        return token;
    }
}

export { AutenticarUsuario_Service };
