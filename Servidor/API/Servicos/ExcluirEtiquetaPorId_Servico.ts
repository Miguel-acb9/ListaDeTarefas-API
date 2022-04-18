// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Etiqueta_Repositorio } from "../Modelos/Repositorios/Etiqueta_Repositorio";

class ExcluirEtiquetaPorId_Servico {
    async executar(id: string) {
        const etiquetaRepositorio = await getCustomRepository(Etiqueta_Repositorio).delete(id);
        if(etiquetaRepositorio.affected === 0) { throw new Error("Erro ao deletar etiqueta."); }

        return { Mensagem: "O usuário foi excluído." };
    }
}

export { ExcluirEtiquetaPorId_Servico };
