// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Grupo_Repositorio } from "../Modelos/Repositorios/Grupo_Repositorio";

class ExcluirGrupoPorId_Servico {
    async executar(id: string) {
        const grupoRepositorio = await getCustomRepository(Grupo_Repositorio).delete(id);
        if(grupoRepositorio.affected === 0) { throw new Error("Erro ao deletar etiqueta."); }

        return { Mensagem: "O Grupo e as tarefas dele foram excluídos." };
    }
}

export { ExcluirGrupoPorId_Servico };
