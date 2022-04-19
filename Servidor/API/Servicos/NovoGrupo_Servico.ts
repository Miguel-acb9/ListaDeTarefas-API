// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { Grupo_Repositorio } from "../Modelos/Repositorios/Grupo_Repositorio";

class NovoGrupo_Servico {
    async executar(id: string, nome: string) {
        const grupoRepositorio = getCustomRepository(Grupo_Repositorio);
        
        // Regras para cadastro do usuário
        if(!id) { throw new Error("ID do usuário ausente."); }
        if(!nome) { throw new Error("Nome da etiqueta ausente."); }
        if(nome.length > 50) { throw new Error("O nome da etiqueta está grande. Limite-se a 20 caracteres"); }
        const grupoExistente = await grupoRepositorio.findOne({ nome: nome, id_criador: id });
        if(grupoExistente) { 
            if(id === grupoExistente.id_criador && nome === grupoExistente.nome) { 
                throw new Error("Você já cadastrou um grupo com esse nome"); 
            }
        }
        
        const grupo = grupoRepositorio.create({ id_criador: id, nome });
        await grupoRepositorio.save(grupo);

        return grupo;
    }
}

export { NovoGrupo_Servico };
