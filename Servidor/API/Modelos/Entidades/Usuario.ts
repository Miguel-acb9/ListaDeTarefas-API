// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("usuarios")
class Usuario {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    ocupacao: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    foto_perfil: string;

    @Column()
    readonly administrador: string;

    @CreateDateColumn()
    readonly criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Usuario };
