// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Estado } from "./Estado";
import { Usuario } from "./Usuario";
import { Categoria } from "./Categoria";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, ManyToMany } from "typeorm";
import { Fluxo } from "./Fluxo";

@Entity("projetos")
class Projeto {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @PrimaryColumn()
    readonly id_fluxo: string;

    @PrimaryColumn()
    id_estado: string;

    @PrimaryColumn()
    cliente: string;

    @PrimaryColumn()
    custo: number;

    @PrimaryColumn()
    data_vencimento: Date;

    @PrimaryColumn({array: true})
    id_adminstradores: string;

    @PrimaryColumn({array: true})
    id_executores: string;

    @PrimaryColumn()
    link_drive: string;

    @CreateDateColumn()
    readonly criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    @JoinColumn({name: "id_fluxo"})
    @ManyToOne(() => Fluxo)
    categoria: Fluxo

    @JoinColumn({name: "id_fluxo"})
    @ManyToOne(() => Estado)
    estado: Estado

    @JoinColumn({name: "id_administradores"})
    @ManyToMany(() => Usuario)
    administradores: Usuario

    @JoinColumn({name: "id_executores"})
    @ManyToMany(() => Usuario)
    executores: Usuario

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Projeto };
