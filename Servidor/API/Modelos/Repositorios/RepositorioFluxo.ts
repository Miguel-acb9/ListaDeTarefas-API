// Importação de módulos e bibliotecas
import { Fluxo } from "../Entidades/Fluxo";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Fluxo)
class RepositorioFluxo extends Repository<Fluxo> { }

export { RepositorioFluxo };
