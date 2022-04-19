// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Grupo_Repositorio } from "../Modelos/Repositorios/Grupo_Repositorio";

class EditarGrupoPorId_Servico {
    async executar(id: string, nome: string ) {
        const grupoRepositorio = getCustomRepository(Grupo_Repositorio);

        // Regra para alterar o nome de uma etiqueta
        if(!nome) { throw new Error("Nome da etiqueta ausente."); }
        const grupoExistente = await grupoRepositorio.findOne({ id: id, nome: nome });
        if(grupoExistente) { throw new Error("Você já cadastrou um grupo com esse nome"); }
        
        const grupo = grupoRepositorio.create({ id, nome });
        const grupoAlterado = await grupoRepositorio.save(grupo);

        return grupoAlterado;
    }
}

export { EditarGrupoPorId_Servico };
