// Importação de módulos e bibliotecas
import { Estado } from "../Entidades/Estado";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Estado)
class Estado_Repositorio extends Repository<Estado> { }

export { Estado_Repositorio };
