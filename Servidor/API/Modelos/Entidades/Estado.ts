// Importação de módulos e bibliotecas
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("estados")
class Estado {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    readonly nome: string;
}

export { Estado };
