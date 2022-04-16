// Importação de módulos e bibliotecas
import { Usuario } from "../Entidades/Usuario";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Usuario)
class RepositorioUsuario extends Repository<Usuario> { }

export { RepositorioUsuario };
