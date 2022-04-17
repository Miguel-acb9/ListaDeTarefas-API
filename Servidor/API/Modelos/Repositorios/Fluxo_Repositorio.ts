// Importação de módulos e bibliotecas
import { Fluxo } from "../Entidades/Fluxo";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Fluxo)
class Fluxo_Repositorio extends Repository<Fluxo> { }

export { Fluxo_Repositorio };
