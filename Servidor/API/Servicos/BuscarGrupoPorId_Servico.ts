// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Grupo_Repositorio } from "../Modelos/Repositorios/Grupo_Repositorio";

class BuscarGrupoPorId_Servico {
    async executar(id: string) {
        const grupoRepositorio = getCustomRepository(Grupo_Repositorio);
        const grupo = await grupoRepositorio.findOne(id);
        if(grupo === undefined) { return { Mensagem: "Grupo não encontrado."}}

        return grupo;
    }
}

export { BuscarGrupoPorId_Servico };