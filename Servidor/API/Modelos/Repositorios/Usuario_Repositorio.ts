// Importação de módulos e bibliotecas
import { Usuario } from "../Entidades/Usuario";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Usuario)
class Usuario_Repositorio extends Repository<Usuario> { }

export { Usuario_Repositorio };
