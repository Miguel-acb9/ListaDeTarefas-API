// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Etiqueta_Repositorio } from "../Modelos/Repositorios/Etiqueta_Repositorio";

class EditarEtiquetaPorId_Servico {
    async executar(id: string, nome: string ) {
        const etiquetaRepositorio = getCustomRepository(Etiqueta_Repositorio);

        // Regra para alterar o nome de uma etiqueta
        if(!nome) { throw new Error("Nome da etiqueta ausente."); }
        const etiquetaExistente = await etiquetaRepositorio.findOne({ nome });
        if(etiquetaExistente) { throw new Error("Esse etiqueta já foi cadastrada."); }
        
        const etiqueta = etiquetaRepositorio.create({ id, nome });
        const etiquetaAlterado = await etiquetaRepositorio.save(etiqueta);

        return etiquetaAlterado;
    }
}

export { EditarEtiquetaPorId_Servico };
