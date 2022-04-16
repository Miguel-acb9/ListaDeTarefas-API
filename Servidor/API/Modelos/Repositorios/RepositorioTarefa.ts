// Importação de módulos e bibliotecas
import { Tarefa } from "../Entidades/Tarefa";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Tarefa)
class RepositorioTarefa extends Repository<Tarefa> { }

export { RepositorioTarefa };
