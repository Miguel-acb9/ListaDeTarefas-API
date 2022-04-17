// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Usuario_Repositorio } from "../Modelos/Repositorios/Usuario_Repositorio";

class ExcluirUsuario_Servico {
    async executar(id: string) {
        const repositorioUsuario = await getCustomRepository(Usuario_Repositorio).delete(id);
        if(repositorioUsuario.affected === 0) { throw new Error("Erro ao deletar usuário administrador."); }

        return { Mensagem: "O usuário foi excluído." };
    }
}

export { ExcluirUsuario_Servico };
