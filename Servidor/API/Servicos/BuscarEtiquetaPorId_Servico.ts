// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { Etiqueta_Repositorio } from "../Modelos/Repositorios/Etiqueta_Repositorio";

class BuscarEtiquetaPorId_Servico {
    async executar(id: string) {
        const etiquetaRepositorio = getCustomRepository(Etiqueta_Repositorio);
        const etiqueta = await etiquetaRepositorio.findOne(id);
        if(etiqueta === undefined) { return { Mensagem: "Etiqueta não encontrada."}}

        return etiqueta;
    }
}

export { BuscarEtiquetaPorId_Servico };