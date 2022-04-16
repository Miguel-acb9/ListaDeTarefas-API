// Importação de módulos e bibliotecas
import { Etiqueta } from "../Entidades/Etiqueta";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Etiqueta)
class RepositorioEtiqueta extends Repository<Etiqueta> { }

export { RepositorioEtiqueta };
