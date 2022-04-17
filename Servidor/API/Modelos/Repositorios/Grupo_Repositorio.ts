// Importação de módulos e bibliotecas
import { Grupo } from "../Entidades/Grupo";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Grupo)
class Grupo_Repositorio extends Repository<Grupo> { }

export { Grupo_Repositorio };
