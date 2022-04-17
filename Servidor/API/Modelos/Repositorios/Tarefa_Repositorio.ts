// Importação de módulos e bibliotecas
import { Tarefa } from "../Entidades/Tarefa";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Tarefa)
class Tarefa_Repositorio extends Repository<Tarefa> { }

export { Tarefa_Repositorio };
