// Importação de módulos e bibliotecas
import { Projeto } from "../Entidades/Projeto";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Projeto)
class Projeto_Repositorio extends Repository<Projeto> { }

export { Projeto_Repositorio };
