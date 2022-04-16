// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaProjetos1650081158274 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "projetos",
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
                        name: "id_fluxo", 
                        type: "integer",
                    },
                    { 
                        name: "id_estado", 
                        type: "integer",
                    },
                    { 
                        name: "cliente", 
                        type: "varchar",
                        length: "50"
                    },
                    { 
                        name: "custo", 
                        type: "decimal"
                    },
                    { 
                        name: "data_vencimento", 
                        type: "timestamp"
                    },
                    { 
                        name: "id_administradores", 
                        type: "uuid",
                        isArray: true,
                    },
                    { 
                        name: "id_executores", 
                        type: "uuid",
                        isArray: true
                    },
                    { 
                        name: "link_drive", 
                        type: "varchar",
                        length: "2000"
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
                        name: "FK_id_fluxo",
                        columnNames: ["id_fluxo"],
                        referencedTableName: "fluxos",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FK_id_estado",
                        columnNames: ["id_estado"],
                        referencedTableName: "estados",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FK_id_administradores",
                        columnNames: ["id_estado"],
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FK_id_executores",
                        columnNames: ["id_estado"],
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
        await queryRunner.dropTable("projetos");
    }
}

export { CriarTabelaProjetos1650081158274 };
