// Importação de módulos e bibliotecas
import { Fluxo } from "./Fluxo";
import { v4 as uuid } from "uuid";
import { Estado } from "./Estado";
import { Usuario } from "./Usuario";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";

@Entity("tarefas")
class Tarefa {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    id_situacoes: string;

    @Column()
    situacao: number;

    @Column()
    id_estado: string;

    @Column()
    importante: boolean;

    @Column()
    data_vencimento: Date;

    @Column({array: true})
    id_responsaveis: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    @JoinColumn({name: "id_estado"})
    @ManyToOne(() => Estado)
    estado: Estado

    @JoinColumn({name: "id_responsaveis"})
    @ManyToOne(() => Usuario)
    responsaveis: Usuario

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Tarefa };
