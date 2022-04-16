// Importação de módulos e bibliotecas
import { Grupo } from "../Entidades/Grupo";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Grupo)
class RepositorioGrupo extends Repository<Grupo> { }

export { RepositorioGrupo };
