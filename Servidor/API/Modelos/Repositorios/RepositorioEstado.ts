// Importação de módulos e bibliotecas
import { Estado } from "../Entidades/Estado";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Estado)
class RepositorioEstado extends Repository<Estado> { }

export { RepositorioEstado };
