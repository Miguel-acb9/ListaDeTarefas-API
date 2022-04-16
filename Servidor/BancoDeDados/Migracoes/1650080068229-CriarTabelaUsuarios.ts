// Importação de módulos e bibliotecas
import { Table, QueryRunner, getConnection, MigrationInterface } from "typeorm";

class CriarTabelaUsuarios1650080068229 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    { 
                        name: "id", 
                        type: "uuid", 
                        isPrimary: true
                    },
                    { 
                        name: "nome", 
                        type: "varchar",
                        length: "50",
                        isNullable: false 
                    },
                    { 
                        name: "ocupacao", 
                        type: "varchar",
                        length: "50",
                    },
                    { 
                        name: "email", 
                        type: "varchar",
                        length: "50",
                        isUnique: true,
                        isNullable: false
                    },
                    { 
                        name: "senha",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    { 
                        name: "foto_perfil", 
                        type: "varchar",
                        isUnique: true
                    },
                    { 
                        name: "administrador", 
                        type: "boolean",
                        default: false,
                        isNullable: false
                    },
                    { 
                        name: "criado_em", 
                        type: "timestamp", 
                        default: "now()"
                    },
                    { 
                        name: "atualizado_em", 
                        type: "tipestamp", 
                        default: "now()"
                    },  
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }
}

export { CriarTabelaUsuarios1650080068229 };
