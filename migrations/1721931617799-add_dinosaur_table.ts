import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDinosaurTable1721931617799 implements MigrationInterface {
    name = 'AddDinosaurTable1721931617799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dinosaur" ("id" uuid NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_2c4f0ee383c08ba32bb9af5143a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dinosaur"`);
    }

}
