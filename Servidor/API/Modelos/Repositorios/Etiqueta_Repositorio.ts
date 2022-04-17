// Importação de módulos e bibliotecas
import { Etiqueta } from "../Entidades/Etiqueta";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Etiqueta)
class Etiqueta_Repositorio extends Repository<Etiqueta> { }

export { Etiqueta_Repositorio };
