// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Usuario_Repositorio } from "../Modelos/Repositorios/Usuario_Repositorio";

class BuscarUsuarioPorId_Servico {
    async executar(id: string) {
        const usuarioRepositorio = getCustomRepository(Usuario_Repositorio);
        const usuario = await usuarioRepositorio.findOne(id);
        if(usuario === undefined) { return { Mensagem: "Usuário não encontrado."}}

        return usuario;
    }
}

export { BuscarUsuarioPorId_Servico };