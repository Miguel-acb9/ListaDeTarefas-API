// Importação de módulos e bibliotecas
import { Table, QueryRunner, getConnection, MigrationInterface } from "typeorm";

class CriarTabelaEstados1650127327029 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "estados",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isArray: true,
                        isUnique: true,
                        isNullable: false
                    }
                ]
            })
        )

        await getConnection()
            .createQueryBuilder()
            .insert()
            .into("estados", ["nome"])
            .values([
                { nome: "Aguardando" },
                { nome: "Em Andamento" },
                { nome: "Parado" },
                { nome: "Concluído" }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("estados");
    }
}

export { CriarTabelaEstados1650127327029 };
