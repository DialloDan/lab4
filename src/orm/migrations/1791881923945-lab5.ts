import {MigrationInterface, QueryRunner} from "typeorm";

export class lab51791881923945 implements MigrationInterface {
    name = 'lab51791881923945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "agents" (
                "id" SERIAL NOT NULL,
                "first_name" character varying(50) NOT NULL,
                "second_name" character varying(50) NOT NULL,
                "patronymic" character varying(50) NOT NULL,
                "passport" character varying(50) NOT NULL,
                "telephone" character varying(50) NOT NULL,
                "email" character varying(100) NOT NULL,
                "bank_card" character varying(50) NOT NULL,
                "salary" character varying NOT NULL,
                CONSTRAINT "UQ_c9e495e6981b5777a62069ab2d1" UNIQUE ("passport"),
                CONSTRAINT "UQ_0c1cfe3c882e32f66b68925e61a" UNIQUE ("telephone"),
                CONSTRAINT "UQ_5fdef501c63984b1b98abb1e68c" UNIQUE ("email"),
                CONSTRAINT "UQ_6d3c529e972fa659be0ef9feff9" UNIQUE ("bank_card"),
                CONSTRAINT "PK_9c653f28ae19c5884d5baf6a1d9" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "tasks" (
                "id" SERIAL NOT NULL,
                "assignment" character varying NOT NULL,
                "status" character varying NOT NULL,
                "date" TIMESTAMP NOT NULL DEFAULT now(),
                "deadline" TIMESTAMP NOT NULL DEFAULT now(),
                "agent_id" integer,
                CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "tasks"
            ADD CONSTRAINT "FK_bcb2622b3a762eb82f65b76d371" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tasks" DROP CONSTRAINT "FK_bcb2622b3a762eb82f65b76d371"
        `);
        await queryRunner.query(`
            DROP TABLE "tasks"
        `);
        await queryRunner.query(`
            DROP TABLE "agents"
        `);
    }

}
