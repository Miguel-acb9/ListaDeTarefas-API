// Importação de módulos e bibliotecas
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("tipos_projetos")
class Categoria {
    @PrimaryColumn()
    readonly id: number;

    @Column()
    readonly nome: string;
}

export { Categoria };
