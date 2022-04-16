// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaGrupos1650081149655 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "grupos",
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
                        isNullable: false,
                    },
                    {
                        name: "id_criador",
                        type: "uuid",
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
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_id_usuario",
                        columnNames: ["id_criador"],
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("grupos");
    }
}

export { CriarTabelaGrupos1650081149655 };