// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { Etiqueta_Repositorio } from "../Modelos/Repositorios/Etiqueta_Repositorio";

class NovaEtiqueta_Servico {
    async executar(nome: string) {
        const etiquetaRepositorio = getCustomRepository(Etiqueta_Repositorio);
        
        // Regras para cadastro do usuário
        if(!nome) { throw new Error("Nome da etiqueta ausente."); }
        if(nome.length > 20) { throw new Error("O nome da etiqueta está grande. Limite-se a 20 caracteres"); }
        const etiquetaExistente = await etiquetaRepositorio.findOne({ nome });
        if(etiquetaExistente) { throw new Error("Esse etiqueta já foi cadastrada."); }
        
        const usuario = etiquetaRepositorio.create({ nome });
        await etiquetaRepositorio.save(usuario);

        return usuario;
    }
}

export { NovaEtiqueta_Servico };
