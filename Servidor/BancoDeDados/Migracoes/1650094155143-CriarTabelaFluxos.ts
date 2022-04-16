// Importação de módulos e bibliotecas
import { Table, QueryRunner, getConnection, MigrationInterface } from "typeorm";

class CriarTabelaFluxos1650094155143 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "fluxos",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "situacoes",
                        type: "varchar",
                        isArray: true,
                        isUnique: true,
                        isNullable: false
                    }
                ]
            })
        );

        await getConnection()
            .createQueryBuilder()
            .insert()
            .into("fluxos", ["situacoes"])
            .values([
                { situacoes: ["A Fazer", "Planejar", "Em Andamento", "Revisar", "Finalizado"] },
                { situacoes: ["A Fazer", "Em Andamento", "Feito"] },
                { situacoes: ["Lições", "Estudar", "Exercitar", "Revisar", "Concluido"] },
                { situacoes: ["A Fazer", "Analisar", "Desenvolver", "Testar", "Implantar", "Finalizado"] }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fluxos");
    }
}

export { CriarTabelaFluxos1650094155143 };
