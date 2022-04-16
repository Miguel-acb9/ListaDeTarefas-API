// Importação de módulos e bibliotecas
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("fluxos")
class Fluxo {
    @PrimaryColumn()
    readonly id: number;

    @Column()
    readonly nome: string;

    @Column({array: true})
    readonly situacoes: string;
}

export { Fluxo };
