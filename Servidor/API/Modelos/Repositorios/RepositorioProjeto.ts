// Importação de módulos e bibliotecas
import { Projeto } from "../Entidades/Projeto";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Projeto)
class RepositorioProjeto extends Repository<Projeto> { }

export { RepositorioProjeto };
