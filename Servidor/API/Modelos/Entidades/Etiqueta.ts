// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Usuario } from "./Usuario";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("etiquetas")
class Etiqueta {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Etiqueta };
