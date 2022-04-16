// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaTarefas1650081169503 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tarefas",
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
                        name: "descricao", 
                        type: "varchar",
                        length: "200"
                    },
                    { 
                        name: "situacao", 
                        type: "integer", 
                        default: "1",
                    },
                    { 
                        name: "id_estado", 
                        type: "integer", 
                        default: "1",
                    },
                    {
                        name: "importante",
                        type: "boolean",
                        default: false
                    },
                    { 
                        name: "data_vencimento", 
                        type: "timestamp"
                    },
                    { 
                        name: "id_responsaveis", 
                        type: "uuid",
                        isUnique: true,
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
                ],
                foreignKeys: [
                    {
                        name: "FK_id_estado",
                        columnNames: ["id_estado"],
                        referencedTableName: "estados",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FK_id_responsaveis",
                        columnNames: ["id_responsaveis"],
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefas");
    }
}

export { CriarTabelaTarefas1650081169503 };
