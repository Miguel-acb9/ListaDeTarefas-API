// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Usuario } from "./Usuario";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";

@Entity("etiquetas")
class Etiqueta {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    readonly id_criador: string;

    @CreateDateColumn()
    readonly criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    @JoinColumn({name: "id_criador"})
    @ManyToOne(() => Usuario)
    criador: Usuario

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Etiqueta };
